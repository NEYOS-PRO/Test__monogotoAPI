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

onMounted(async () => {
    try {
        const response = await fetch("https://console.monogoto.io/report-history/downloadReport/csv/%2Fefs%2Freports%2Fcsv%2F2025%2F2%2F20%2FReport_Rapport_complet3_%23b15fe.csv", {
            headers: {
                "Accept": "application/json",
                "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJSb2xlIjoiVXNlclByb2ZpbGVJZF80MGUwNGM5MS1lZjVjLTRiY2YtYTA4Yi0yMjRlM2Y2ZDk5ZDEiLCJSZWFsbSI6ImN1c3RvbWVyIiwiQ3VzdG9tZXJJZCI6ImNpZF8zYzY4M2FjNC1kYmFhLTQ4MzQtODZmOC0wOGRmMTRkZDFiM2QiLCJPcmdhbml6YXRpb25JZCI6Ik9yZ2FuaXphdGlvbklkXzIzODc4ZDdkLWRmNTktNDYzOS1hYzJjLTFlYzZkOWQ4YjAxYSIsIlVzZXJJZCI6IlVzZXJJZF85MWVkNjI1Yy1lY2UwLTQxMWItOTgzMi1lZDM5ZTk3OGVhMTYiLCJqd3RpZCI6ImE0YzViZWM1LTM4ZTctNGZmYS05ODBiLTFkYjAzNzM2MWMxNSIsImlhdCI6MTc0MDM4NjY1MSwiZXhwIjoxNzQwNDAxMDUxfQ.PGkMdQ4zg-gchpsJvX1gBojlEqkrR4JuZix4KE8EdPM`
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
