<template>
    <div v-if="report">
        <h1>Report</h1>
        <UTable
            loading
            :loading-state="{ icon: 'i-heroicons-arrow-path-20-solid', label: 'Loading...' }"
            :progress="{ color: 'primary', animation: 'carousel' }"
            sort-asc-icon="i-heroicons-arrow-up-20-solid"
            sort-desc-icon="i-heroicons-arrow-down-20-solid"
            :sort-button="{ icon: 'i-heroicons-sparkles-20-solid', color: 'primary', variant: 'outline', size: '2xs', square: false, ui: { rounded: 'rounded-full' } }"
            class="w-full"
            :columns="columns"
            :rows="report"
        />
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const report = ref(null);

const columns = [
    { key: 'Thing Name', label: 'Thing Name',sortable: true },
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
    { key: 'Credit', label: 'Credit',sortable: true },
    { key: 'Total', label: 'Total' }
];

/**
 * EN VAR
 */

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
</script>
