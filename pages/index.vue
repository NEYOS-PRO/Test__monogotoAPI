<template>
    <div>
        <div class="flex flex-col md:flex-row md:justify-between items-center p-3 mx-3">   
            <div class="flex items-center space-x-4 justify-start px-3 py-3.5">
                <UInput v-model="q" placeholder="Filter ICCID..." />
                <UDropdown :items="exports" :popper="{ placement: 'bottom-start' }">
                  <UButton color="white" label="Export data" trailing-icon="i-heroicons-chevron-down-20-solid" />
                </UDropdown>
            </div>
            <UPopover :popper="{ placement: 'bottom-start' }" class="mt-3">
                <UButton icon="i-heroicons-calendar-days-20-solid">
                {{ format(selectedDate.start, 'd MMM, yyy') }} - {{ format(selectedDate.end, 'd MMM, yyy') }}
                </UButton>

                <template #panel="{ close }">
                <div class="flex items-center">
                    <div class="hidden sm:flex flex-col py-4">
                        <UButton
                            v-for="(range, index) in ranges"
                            :key="index"
                            :label="range.label"
                            color="gray"
                            variant="ghost"
                            class="rounded-none px-6"
                            :class="[isRangeSelected(range.duration) ? 'bg-gray-100 dark:bg-gray-800' : 'hover:bg-gray-50 dark:hover:bg-gray-800/50']"
                            truncate
                            @click="selectRange(range.duration)"
                        />
                    </div>

                    <DatePicker v-model="selectedDate" @close="close" />
                </div>
                </template>
            </UPopover>
        </div>
        

        <UTable
         class="txt-xs"
         :loading-state="{ icon: 'i-heroicons-arrow-path-20-solid', size:56, label: 'Generating report, please wait...' }"
         :progress="{ color: 'info', animation: 'swing' }"
         :columns="selectedColumns" :rows="filteredRows" v-model:expand="expand" :loading="loading === 'pending'">
            <!--  -->
            <template #expand="{ row }">
                <div>
                  <UTable 
                    :columns="secondaryColumns" 
                    :rows="row.allOperators.filter(operator => operator !== '').map(operator => ({
                      Operators: operator,
                      Data: row.Consumption[operator]?.Data || 'N/A',
                      Total: row.Consumption[operator]?.Total || 'N/A'
                    }))" 
                    class="bg-slate-100 dark:bg-slate-800 dark:text-slate-50" 
  
                  />
                </div>
            </template>
        </UTable>

        <!--Pagination-->
        <div v-if="data.length>0">
          <UPagination v-if="q === '' && data.length>pageCount" class="flex justify-center mt-3" size="xs" v-model="page" :page-count="5" :total="items.length" />
        </div>
        
    </div>
</template>

<script setup lang="js">
import { ref, onMounted, watch, computed } from 'vue';
import { sub, format, isSameDay } from 'date-fns';
import { DatePicker } from "v-calendar"; 
import 'v-calendar/dist/style.css'; 
import { da } from 'date-fns/locale';
import * as XLSX from 'xlsx';
const runtimeConfig = useRuntimeConfig(); 

const selected = ref([]); 
const data = ref([]);

/**
 * Les dates selectionnées
 */

 const start_date = ref(new Date(new Date().setDate(new Date().getDate() - 7)).toISOString());
 const end_date = ref(new Date().toISOString());
/**
 * Data pagination
 */
const page = ref(1);
const items = ref(data);
const pageCount = 6;

const loading = ref("pending");

const expand = ref({
  openedRows: [data[0]],
  row: {}
});

const rows = computed(() => {
  const start = (page.value - 1) * pageCount;
  const end = start + pageCount;
  return items.value.slice(start, end);
});


const columns = [
  { key: 'ICCID', label: 'ICCID', sortable: true },
  { key: 'IMSI', label: 'IMSI', sortable: true },
  { key: 'lastOperators', label: 'Last Operators', sortable: true }, 
  { key: 'lastData', label: 'Last Data', sortable: true },
  { key: 'totalData', label: 'Total Data', sortable: true }
];
const selectedColumns = ref([...columns]);

const secondaryColumns = [
  { key: 'Operators', label: 'Operators' }, // Add Operators column
  { key: 'Data', label: 'Data' },
  // { key: 'Total', label: 'Total' }

];

/***
 * Gestion des ressources...
 */

const ranges = [
  { label: 'Last 7 days', duration: { days: 7 } },
  { label: 'Last 14 days', duration: { days: 14 } },
  { label: 'Last 30 days', duration: { days: 30 } },
  { label: 'Last 3 months', duration: { months: 3 } },
  { label: 'Last 6 months', duration: { months: 6 } },
  { label: 'Last year', duration: { years: 1 } }
];
const selectedDate = ref({ start: sub(new Date(), { days: 7 }), end: new Date() });

function isRangeSelected(duration) {
  return isSameDay(selectedDate.value.start, sub(new Date(), duration)) && isSameDay(selectedDate.value.end, new Date());
}

function selectRange(duration) {
  selectedDate.value = { start: sub(new Date(), duration), end: new Date() };

  //stocker les dates selectionnées
  start_date.value = selectedDate.value.start.toISOString();
  end_date.value = selectedDate.value.end.toISOString();
}

/**
 * Lorsque le composant est monté, on récupère les données
 * du report généré....
 */

 async function fetchReport() {
  loading.value = "pending";
  try {
    const response = await fetch(`${runtimeConfig.public.URL_REQUEST}/get_things_report/${start_date.value}/${end_date.value}`); 
    const jsonData = await response.json();
   
    // console.log("Data => ", jsonData);

    if (response.ok) {
      // Transform the data to match the table columns
      const transformedData = jsonData.map(item => {
        const operators = item['Operators'];
        const lastOperator = operators.length > 0 ? operators[operators.length - 1] : '';
        const secondLastOperator = operators.length > 1 ? operators[operators.length - 2] : '';
        const iccidMatch = item['Thing Name'].match(/ICCID (\d+)/);
        const iccid = iccidMatch ? iccidMatch[1] : 'N/A';
        const lastOperatorData = item['Consumption'][lastOperator];
        const totalData = item['Consumption'][''] ? item['Consumption']['']['Data'] : 'N/A'; // Total Data from empty key
        return {
          'Thing Name': item['Thing Name'],
          'IMSI': item['IMSI'],
          'ICCID': iccid, // Extracted ICCID
          'lastOperators': lastOperator || secondLastOperator, // Use last operator or second last if last is empty
          'allOperators': operators, // Store all operators
          'Consumption': item['Consumption'], // Store all consumption data
          'SMS': lastOperatorData['Total'] || 'N/A', // Assuming 'Total' represents SMS consumption
          'Credit': lastOperatorData['Credit'] || 'N/A',
          'Total Before Credit': lastOperatorData['Total Before Credit'] || 'N/A',
          'Total': lastOperatorData['Total'] || 'N/A',
          'Status': item['Status'],
          'lastData': lastOperatorData['Data'] || 'N/A', // New field
          'totalData': totalData // New field
        };
      });
      data.value = transformedData;
      // console.log('Data transform+>', transformedData);
    }
    loading.value = "idle";
  } catch (error) {
    console.log(error); 
  }
}

onMounted(fetchReport);

watch([start_date, end_date], fetchReport);

// Ajout de la référence pour la recherche
const q = ref('');

// Propriété calculée pour filtrer les lignes en fonction de la valeur de q
const filteredRows = computed(() => {
  if (!q.value) {
    return rows.value;
  }
  return rows.value.filter((row) => {
    return Object.values(row).some((value) => {
      return String(value).toLowerCase().includes(q.value.toLowerCase());
    });
  });
});

/**
 * Export data 
*/

const exports = [
  [
    {
      label: 'Export CSV',
      icon: 'i-heroicons-circle-stack',
      shortcuts: ['E'],
      click: downloadCSV,
    },
    {
      label: 'Export Excel',
      icon: 'i-heroicons-document-text',
      shortcuts: ['X'],
      click: () => jsonToExcel(data.value),
    }
  ],
]; 

/**
 * Export data to Excel
 */
async function jsonToExcel(jsonData) {
  if (jsonData.length === 0) {
    alert('No data available');
    return;
  }

  // Créez une feuille de calcul à partir des données JSON
  const worksheet = XLSX.utils.json_to_sheet(jsonData);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Data');

  // Générez un fichier Excel
  const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });

  // Créez un Blob pour le téléchargement
  const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
  const url = URL.createObjectURL(blob);

  // Téléchargez le fichier
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'data.xlsx');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}


/**
 * CSV export
 */
 function jsonToCsv(jsonData) {
  if (jsonData.length === 0) {
    return 'No data available';
  }

  let csv = '';
  
  // Extract headers
  const headers = Object.keys(jsonData[0]);
  csv += headers.join(',') + '\n';
  
  // Extract values
  jsonData.forEach(obj => {
    const values = headers.map(header => obj[header]);
    csv += values.join(',') + '\n';
  });
  
  return csv;
}

async function downloadCSV() {
  const csvContent = await getCSV();
  if (csvContent === 'No data available') {
    alert(csvContent);
    return;
  }

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', 'data.csv');
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

async function getCSV() {
  if (data.value.length === 0) {
    return 'No data available';
  }
  return jsonToCsv(data.value);
}

</script>