<template>
    <div v-if="report">
        <h1>Report</h1>
        <div>
            {{ report }}

            --------------------------------
            {{ jsonData }}
        </div>
       
    </div>
</template>


<script setup> 
    import {ref} from "vue";
    const report = ref(null);
    const jsonData= ref(null);


    function csvToJson(csvText) {
        if (!csvText) return []; // Vérifie si le CSV est vide

        const lines = csvText.trim().split(/\r?\n/); // Gestion des retours à la ligne
        const headers = lines[0].split(",").map(h => h.trim()); // En-têtes

        const result = [];

        for (let i = 1; i < lines.length; i++) {
            const values = lines[i].split(",").map(v => v.trim());

            if (values.length === headers.length) { // Évite les lignes incomplètes
                let obj = {};
                headers.forEach((header, index) => {
                    obj[header] = isNaN(values[index]) ? values[index] : Number(values[index]); // Convertit les nombres
                });
                result.push(obj);
            }
        }

        return result;
    }


    onMounted( async ()=>{
        
        try {

            const response= await fetch("https://console.monogoto.io/report-history/downloadReport/csv/%2Fefs%2Freports%2Fcsv%2F2025%2F2%2F20%2FReport_Rapport_complet3_%23b15fe.csv",{
                headers:{
                    "Accept":"application/json",
                    "Authorization":`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJSb2xlIjoiVXNlclByb2ZpbGVJZF80MGUwNGM5MS1lZjVjLTRiY2YtYTA4Yi0yMjRlM2Y2ZDk5ZDEiLCJSZWFsbSI6ImN1c3RvbWVyIiwiQ3VzdG9tZXJJZCI6ImNpZF8zYzY4M2FjNC1kYmFhLTQ4MzQtODZmOC0wOGRmMTRkZDFiM2QiLCJPcmdhbml6YXRpb25JZCI6Ik9yZ2FuaXphdGlvbklkXzIzODc4ZDdkLWRmNTktNDYzOS1hYzJjLTFlYzZkOWQ4YjAxYSIsIlVzZXJJZCI6IlVzZXJJZF85MWVkNjI1Yy1lY2UwLTQxMWItOTgzMi1lZDM5ZTk3OGVhMTYiLCJqd3RpZCI6ImE0YzViZWM1LTM4ZTctNGZmYS05ODBiLTFkYjAzNzM2MWMxNSIsImlhdCI6MTc0MDM4NjY1MSwiZXhwIjoxNzQwNDAxMDUxfQ.PGkMdQ4zg-gchpsJvX1gBojlEqkrR4JuZix4KE8EdPM`
                }
            })
            const data = await response.text();
            report.value = data;

            jsonData.value = csvToJson(data);
            csvToJson(data);
            console.log("JSON converti :", jsonData.value); // Vérifie la sortie

        }catch(error){
            console.log(error)
        }
       
    })

     
      
</script>