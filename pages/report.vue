<template>
    <div>
        <div class="flex items-center justify-between gap-3 px-4 py-3">
            <UInput v-model="searchQuery" icon="i-heroicons-magnifying-glass-20-solid" placeholder="Search..." />
            <USelectMenu v-model="selectedColumns" :options="columnsOptions" multiple >
                <UButton icon="i-heroicons-view-columns" color="gray" size="lg" class="w-[10rem]">
                    Columns
                </UButton>
            </USelectMenu>
        </div>
        <div v-if="report">
            <UTable
                loading
                v-model:expand="expand"
                :loading-state="{ icon: 'i-heroicons-arrow-path-20-solid', label: 'Loading...' }"
                :progress="{ color: 'primary', animation: 'carousel' }"
                sort-asc-icon="i-heroicons-arrow-up-20-solid"
                sort-desc-icon="i-heroicons-arrow-down-20-solid"
                :sort-button="{ icon: 'i-heroicons-sparkles-20-solid', color: 'primary', variant: 'outline', size: '2xs', square: false, ui: { rounded: 'rounded-full' } }"
                class="w-full"
                :columns="filteredColumns"
                :rows="paginatedRows"
            >
                <template #expand="{ row }">
                    <div class="p-4">
                        <pre>{{ row }}</pre>
                    </div>
                </template>
            </UTable>
            <div class="flex justify-end px-3 py-3.5 border-t border-gray-200 dark:border-gray-700">
                <UPagination v-model="page" :page-count="pageCount" :total="filteredRows.length" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";

const expand = ref({
  openedRows: [],
  row: null
})

const report = ref(null);
const searchQuery = ref("");
const selectedColumns = ref([]); // Initialiser avec toutes les clés des colonnes
const page = ref(1);
const pageCount = 5;

const columns = [
    { key: 'Thing Name', label: 'Thing Name', sortable: true },
    { key: 'IMSI', label: 'IMSI', sortable: true },
    { key: 'MSISDN', label: 'MSISDN', sortable: true },
    { key: 'Roaming Partner', label: 'Roaming Partner' },
    { key: 'Data', label: 'Data', sortable: true },
    { key: 'SMS', label: 'SMS' },
    { key: 'MO SMS', label: 'MO SMS' },
    { key: 'MT SMS', label: 'MT SMS' },
    { key: 'Voice', label: 'Voice' },
    { key: 'MO VOICE', label: 'MO VOICE' },
    { key: 'MT VOICE', label: 'MT VOICE' },
    { key: 'Total Before Credit', label: 'Total Before Credit' },
    { key: 'Credit', label: 'Credit', sortable: true },
    { key: 'Total', label: 'Total' }
];

const columnsOptions = columns.map(column => ({ value: column.key, label: column.label }));

// Initialiser selectedColumns avec toutes les clés des colonnes
selectedColumns.value = columns.map(column => column.key);

const config = useRuntimeConfig();

onMounted(async () => {
    try {
        const response = await fetch("https://console.monogoto.io/report-history/downloadReport/csv/%2Fefs%2Freports%2Fcsv%2F2025%2F2%2F20%2FReport_Rapport_complet3_%23b15fe.csv", {
            headers: {
                "Accept": "application/json",
                "Authorization": `Bearer ${config.public.TOKEN_API}`
            }
        });
        const data = await response.text();
        console.log("CSV Data:", data);
        
        /***
         * Conversion des datas CSV en JSON
         * avec la méthode csvToJson
         */
        const jsonData = csvToJson(data);
        report.value = jsonData;

        console.log("Filtered JSON Data:", jsonData);
    } catch (error) {
        console.log(error);
    }
});

const filteredColumns = computed(() => {
    if (selectedColumns.value.length === 0) {
        return columns;
    }
    return columns.filter(column => selectedColumns.value.includes(column.key));
});

const filteredRows = computed(() => {
    if (!searchQuery.value) {
        return report.value;
    }
    return report.value.filter(row => {
        return Object.values(row).some(value => 
            String(value).toLowerCase().includes(searchQuery.value.toLowerCase())
        );
    });
});

const paginatedRows = computed(() => {
    const start = (page.value - 1) * pageCount;
    const end = page.value * pageCount;
    return filteredRows.value.slice(start, end);
});
</script>
