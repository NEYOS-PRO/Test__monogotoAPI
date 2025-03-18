<template>
    <div class="relative">
        <div class="flex flex-col md:flex-row md:justify-between items-center mx-3">   
            <div class="flex space-x-3 justify-end md:space-x-3 px-3 py-3.5 dark:border-gray-700">
                <USelectMenu v-model="selectedColumns" :options="columns" multiple placeholder="Columns"/>
                <UButton
                    size="xs"
                    color="blue"
                    variant="solid"
                    label="Activate"
                    :disabled="selected.length === 0"
                    :trailing="false"
                    @click="ActivateSim"
                />

                <UButton
                    size="xs"
                    color="red"
                    variant="solid"
                    label="Desactivate"
                    :disabled="selected.length === 0"
                    :trailing="false"
                    @click="isModalOpen = true"
                />
            </div>
            <UPopover :popper="{ placement: 'bottom-start' }">
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

        <!-- Spinner component -->
        <!-- <Spinner v-if="loading === 'pending'" /> -->

        <UTable
         class="txt-xs"
         :loading-state="{ icon: 'i-heroicons-arrow-path-20-solid', size:56, label: 'Generating report, please wait...' }"
         :progress="{ color: 'info', animation: 'swing' }"
         :columns="selectedColumns" :rows="rows" v-model="selected" @select="select" v-model:expand="expand" :loading="loading === 'pending'">
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
        <UPagination class="flex justify-center mt-3" size="xs" v-model="page" :page-count="5" :total="items.length" />

        <!---Modal Altert Delete SIM-->

        <UModal v-model="isModalOpen" prevent-close>
          <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
            <template #header>
              <div class="flex items-center justify-between">
                <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                  Souhaitez-vous vraiment désactiver cette SIM ?
                </h3>
                <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isModalOpen = false" />
              </div>
            </template>

            <div calss="p-4">
                <p class="text-sm text-gray-600 dark:text-gray-400">
                    Vous êtes sur le point de désactiver la SIM sélectionnée. Voulez-vous continuer ?
                </p>
                <div class="flex justify-end mt-4">
                    <UButton color="gray" variant="ghost" label="Annuler" @click="isModalOpen = false" />
                    <UButton color="red" variant="solid" label="Désactiver" @click="DesactivateSim" />          
                </div>
            </div>
          </UCard>
        </UModal>

        <!--Modal Message-->
        <UModal v-model="modalMessageOpen" :transition="false">
          <div class="p-4 flex justify-between items-center flex-row space-y-2">
            <p>{{ modalMEssage }}</p>
            <UIcon name="i-heroicons-rocket-launch" class="w-5 h-5" />
          </div>
        </UModal>
    </div>
</template>

<script setup lang="js">
import { ref, onMounted, watch, computed } from 'vue';
import { sub, format, isSameDay } from 'date-fns';
import { DatePicker } from "v-calendar"; 
import 'v-calendar/dist/style.css'; 
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
const pageCount = 5;

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

/**
 * Recupération de l'id de la SIM sélectionnée...
 * @param row 
 */

function select(row) {
  const index = selected.value.findIndex(item => item.id === row.id);
  if (index === -1) {
    selected.value.push(row);
  } else {
    selected.value.splice(index, 1);
  }
}

const columns = [
  { key: 'ICCID', label: 'ICCID', sortable: true },
  { key: 'IMSI', label: 'IMSI', sortable: true },
  { key: 'Status', label: 'Status', sortable: true },
  { key: 'Operators', label: 'Operators', sortable: true }, // Add Operators column
  { key: 'Data', label: 'Data', sortable: true },
  { key: 'SMS', label: 'SMS', sortable: true }
];

const selectedColumns = ref([...columns]);

const secondaryColumns = [
  { key: 'Operators', label: 'Operators' }, // Add Operators column
  { key: 'Data', label: 'Data' },
  { key: 'Total', label: 'Total' }

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
   
    console.log("Data => ", jsonData);

    if (response.ok) {
      // Transform the data to match the table columns
      const transformedData = jsonData.map(item => {
        const operators = item['Operators'];
        const lastOperator = operators.length > 0 ? operators[operators.length - 1] : '';
        const secondLastOperator = operators.length > 1 ? operators[operators.length - 2] : '';
        const iccidMatch = item['Thing Name'].match(/ICCID (\d+)/);
        const iccid = iccidMatch ? iccidMatch[1] : 'N/A';
        const lastOperatorData = item['Consumption'][lastOperator] || {};
        return {
          'Thing Name': item['Thing Name'],
          'IMSI': item['IMSI'],
          'ICCID': iccid, // Extracted ICCID
          'Operators': lastOperator || secondLastOperator, // Use last operator or second last if last is empty
          'allOperators': operators, // Store all operators
          'Consumption': item['Consumption'], // Store all consumption data
          'Data': lastOperatorData['Data'] || 'N/A',
          'SMS': lastOperatorData['Total'] || 'N/A', // Assuming 'Total' represents SMS consumption
          'Credit': lastOperatorData['Credit'] || 'N/A',
          'Total Before Credit': lastOperatorData['Total Before Credit'] || 'N/A',
          'Total': lastOperatorData['Total'] || 'N/A',
          'Status': item['Status']
        };
      });
      data.value = transformedData;
    }
    loading.value = "idle";
  } catch (error) {
    console.log(error); 
  }
}

onMounted(fetchReport);

watch([start_date, end_date], fetchReport);

/**
 * Modal
 */

const isModalOpen = ref(false); 

/**
 * Modal Message
 */
const modalMEssage = ref(null); 
const modalMessageOpen = ref(false);

/***
 * Activate des SIMs
 */

const ActivateSim = async () => {
   

  const ICCID = selected.value[0]['ICCID'];

  try {
    const response = await fetch(`${runtimeConfig.public.URL_REQUEST}/update_thing_status/${ICCID}/ACTIVE`);

    if (response.ok) {
      console.log('SIMs Activated successfully');
      modalMEssage.value = 'SIMs Activated successfully';
      selected.value = [];
      modalMessageOpen.value = true;
      /**
       * Après 2 sec désactivé le modal
       */
      setTimeout(() => {
        modalMessageOpen.value = false;
        selected.value = [];
      }, 2000);
    }
  } catch (error) {
    console.log(error);
  }
}

/**
 * Desactivate des SIMs
 */
const can_desactivate = ref(false);
const DesactivateSim = async () => {
  const ICCID = selected.value[0]['ICCID'];

  if (can_desactivate.value === false) {
    selected.value = [];
    return false;
  }

  try {
    const response = await fetch(`${runtimeConfig.public.URL_REQUEST}/update_thing_status/${ICCID}/SUSPENDED`);

    if (response.ok) {
      console.log('SIMs Desactivate successfully');
      modalMEssage.value = 'SIMs Desactivate successfully';
      selected.value = [];
      modalMessageOpen.value = true;
      /**
       * Après 2 sec désactivé le modal
       */
      setTimeout(() => {
        modalMessageOpen.value = false;
      }, 2000);
    }
  } catch (error) {
    console.log(error);
  }
}


</script>+