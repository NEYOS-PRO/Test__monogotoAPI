<template>
    <div>

        <div class="flex justify-between items-center mx-3">   
            <div class="flex px-3 py-3.5 border-b border-gray-200 dark:border-gray-700">
                <USelectMenu v-model="selectedColumns" :options="columns" multiple placeholder="Columns" />
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
         :columns="selectedColumns" :rows="data" v-model="selected" @select="select" v-model:expand="expand" :loading="loading === 'pending'">
            <!--  -->
            <template #expand="{ row }">
                <div class="p-4">
                    <pre>{{ row }}</pre>
                </div>
            </template>
        </UTable>
    </div>



    <!--Pagination-->
    <UPagination class="flex justify-center mt-3 mb-3" v-model="page" :total="items.length" :ui="{ rounded: 'first-of-type:rounded-s-md last-of-type:rounded-e-md' }">
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
</template>

<script setup lang="js">
import { ref, onMounted } from 'vue';
import { sub, format, isSameDay } from 'date-fns';

const selected = ref([]); 
const data = ref([]);

/**
 * Data pagination
 */

const page = ref(1);
const items = ref(data);

const loading = ref("pending");

const expand = ref({
  openedRows: [data[0]],
  row: {}
});

function select(row) {
  const index = selected.value.findIndex(item => item.id === row.id);
  if (index === -1) {
    selected.value.push(row);
  } else {
    selected.value.splice(index, 1);
  }
  
  console.log(selected.value);
}

const columns = [
  { key: 'Thing Name', label: 'Thing Name', sortable: true },
  { key: 'IMSI', label: 'IMSI', sortable: true },
  { key: 'Operators', label: 'Operators', sortable: true },
  { key: 'Data', label: 'Data', sortable: true },
  { key: 'SMS', label: 'SMS', sortable: true },
  { key: 'Credit', label: 'Credit', sortable: true },
  { key: 'Total', label: 'Total', sortable: true }
];

const selectedColumns = ref([...columns]);

/**
 * Lorsque le composant est monté, on récupère les données
 * du report généré....
 */

onMounted(async () => {
  try {
    const response = await fetch('http://localhost:3333/get_things_report/'); 
    const jsonData = await response.json();
    loading.value = "pending";

    if (response.ok) {
      console.log(jsonData);
      // Transform the data to match the table columns
      const transformedData = jsonData.map(item => ({
        'Thing Name': item['Thing Name'],
        'IMSI': item['IMSI'],
        'Operators': item['Operators'].join(', '),
        'Data': item['Consumption'][0]['Data'],
        'SMS': item['Consumption'][0]['SMS'],
        'Credit': item['Consumption'][0]['Credit'],
        'Total': item['Consumption'][0]['Total']
      }));
      data.value = transformedData;
      loading.value = "idle";
    }
  } catch (error) {
    console.log(error); 
  }
});

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
const selectedDate = ref({ start: sub(new Date(), { days: 14 }), end: new Date() });

function isRangeSelected(duration) {
  return isSameDay(selectedDate.value.start, sub(new Date(), duration)) && isSameDay(selectedDate.value.end, new Date());
}

function selectRange(duration) {
  selectedDate.value = { start: sub(new Date(), duration), end: new Date() };
  console.log(selectedDate.value);
}
</script>