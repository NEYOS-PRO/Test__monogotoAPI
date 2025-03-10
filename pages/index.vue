<template>
    <div>

        <div class="flex justify-between items-center mx-3">   
            <div class="flex space-x-3 px-3 py-3.5 border-b border-gray-200 dark:border-gray-700">
                <USelectMenu v-model="selectedColumns" :options="columns" multiple placeholder="Columns" />
                <UButton
                    icon="i-heroicons-arrow-path"
                    size="sm"
                    color="primary"
                    variant="solid"
                    label="Generating report"
                    disabled
                    :trailing="false"
                />

                <UButton
                    size="sm"
                    color="blue"
                    variant="solid"
                    label="Activate"
                    :disabled="selected.length === 0"
                    :trailing="false"
                    @click="ActivateSim"
                />

                <UButton
                    size="sm"
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
                <div class="flex items-center sm:divide-x divide-gray-200 dark:divide-gray-800">
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
         :loading-state="{ icon: 'i-heroicons-arrow-path-20-solid', label: 'Generating report, please wait...' }"
         :columns="selectedColumns" :rows="filteredData" v-model="selected" @select="select" v-model:expand="expand" :loading="loading === 'pending'">
            <!--  -->
            <template #expand="{ row }">
            
                <div class="txt-xs">
                  <UTable :columns="secondaryColumns" :rows="getHistoricalData(row.IMSI)" class="bg-slate-100 dark:bg-slate-800 dark:text-slate-50" />
                    <!-- <pre>{{ row }}</pre> -->
                </div>
            </template>
        </UTable>
    </div>



    <!--Pagination-->
    <UPagination  class="flex justify-center mt-3 mb-3" v-model="page" :page-count="pageCount" :total="items.length" :ui="{ rounded: 'first-of-type:rounded-s-md last-of-type:rounded-e-md' }">
        <template #first="{ onClick, canGoFirst }">
            <UTooltip text="First page">
                <UButton
                icon="i-heroicons-arrow-uturn-left"
                color="primary"
                :ui="{ rounded: 'rounded-full' }"
                class="rtl:[&_span:first-child]:rotate-180 me-2"
                :disabled="!canGoFirst"
                @click="onClick"
                />
            </UTooltip>
        </template>

        <template #last="{ onClick, canGoLast }">
            <UTooltip text="Last page">
                <UButton
                icon="i-heroicons-arrow-uturn-right-20-solid"
                color="primary"
                :ui="{ rounded: 'rounded-full' }"
                class="rtl:[&_span:last-child]:rotate-180 ms-2"
                :disabled="!canGoLast"
                @click="onClick"
                />
            </UTooltip>
        </template>
    </UPagination>

  

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
      <div class="p-4 flex flex-row space-y-2">
        <p>{{ modalMEssage }}</p>
        <UIcon name="i-heroicons-rocket-launch" class="w-5 h-5" />
      </div>
    </UModal>
</template>

<script setup lang="js">
import { ref, onMounted, watch, computed } from 'vue';
import { sub, format, isSameDay } from 'date-fns';
import { DatePicker } from "v-calendar"; 
import 'v-calendar/dist/style.css'; 

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

// const rows = computed(() => {
//   const start = (page.value - 1) * pageCount;
//   const end = start + pageCount;
//   return items.value.slice(start, end);
// });

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
  /**
   * Affichage de l'IMSI de la SIM sélectionnée
   */
  console.log(selected.value[0]['IMSI']);
}

const columns = [
  { key: 'Thing Name', label: 'Thing Name', sortable: true },
  { key: 'IMSI', label: 'IMSI', sortable: true },
  { key: 'Data', label: 'Data', sortable: true },
  { key: 'SMS', label: 'SMS', sortable: true }
];

const selectedColumns = ref([...columns]);

const secondaryColumns = [
  { key: 'Data', label: 'Data' },
  { key: 'SMS', label: 'SMS'},
  { key: 'MO SMS', label: 'MO SMS' },
  { key: 'MT SMS', label: 'MT SMS'}
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
  // console.log("start_date"+selectedDate.value.start.toISOString());
  // console.log("end"+selectedDate.value.end.toISOString());
}

/**
 * Lorsque le composant est monté, on récupère les données
 * du report généré....
 */

 async function fetchReport() {
  try {
    const response = await fetch(`http://localhost:3333/get_things_report/${start_date.value}/${end_date.value}`); 
    const jsonData = await response.json();
    loading.value = "pending";

    if (response.ok) {
      console.log(jsonData);
      // Transform the data to match the table columns
      const transformedData = jsonData.map(item => ({
        'Thing Name': item['Thing Name'],
        'IMSI': item['IMSI'],
        'MSISDN': item['MSISDN'],
        'Roaming Partner': item['Roaming Partner'],
        'Data': item['Data'],
        'SMS': item['SMS'],
        'MO SMS': item['MO SMS'],
        'MT SMS': item['MT SMS'],
        'Voice': item['Voice'],
        'MO VOICE': item['MO VOICE'],
        'MT VOICE': item['MT VOICE'],
        'Total Before Credit': item['Total Before Credit'],
        'Credit': item['Credit'],
        'Total': item['Total']
      }));
      data.value = transformedData;
      loading.value = "idle";
    }
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
  const IMSI = selected.value[0]['IMSI'];

  try {
    const response = await fetch(`http://localhost:3333/update_thing_status/${IMSI}/ACTIVE`);

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
  const IMSI = selected.value[0]['IMSI'];

  if (can_desactivate.value === false) {
    selected.value = [];
    return false;
  }

  try {
    const response = await fetch(`http://localhost:3333/update_thing_status/${IMSI}/SUSPENDED`);

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

function getLatestData(data) {
  const latestDataMap = new Map();
  data.forEach(item => {
    if (!latestDataMap.has(item['IMSI'])) {
      latestDataMap.set(item['IMSI'], item);
    } else {
      const existingItem = latestDataMap.get(item['IMSI']);
      if (!existingItem['Data'] && item['Data']) {
        existingItem['Data'] = item['Data'];
      }
    }
  });

  // If Data is still empty, use the second last value
  latestDataMap.forEach((value, key) => {
    if (!value['Data']) {
      const historicalData = data.filter(item => item['IMSI'] === key);
      if (historicalData.length > 1) {
        value['Data'] = historicalData[historicalData.length - 2]['Data'];
      }
    }
  });

  return Array.from(latestDataMap.values());
}

const filteredData = computed(() => getLatestData(data.value));

function getHistoricalData(IMSI) {
  const historicalData = data.value.filter(item => item['IMSI'] === IMSI);
  return historicalData.slice(0, -1); // Exclude the last value
}
</script>