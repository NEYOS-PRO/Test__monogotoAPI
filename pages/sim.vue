<template>
    <div v-if="data.length > 0">
        <div class="flex px-3 py-3.5 border-b border-gray-200 dark:border-gray-700">
            <UInput v-model="q" placeholder="Filter ICCID..." />
        </div>
        <UTable :rows="data" v-model="selected" />
    </div>
    <div v-else>
        <h1>Sim</h1>
        <p>Loading...</p>   
    </div>
</template>

<script setup lang="ts">

const data = ref([]);
const runtimeConfig = useRuntimeConfig();
const selected = ref([data[0]]); 

const fetchData=async()=>{
    try{
        const res=await fetch(`${runtimeConfig.public.URL_REQUEST}/list_of_things`); 
        const jsonData=await res.json();
        console.log(jsonData);

        const structureDATA=jsonData.map((item)=>{

            const lastActivity=item.LastLocationUpdateTime ? item.LastLocationUpdateTime : "No data"; // if there is no data, it will show "No data"
            return {
                ICCID:item.ExternalUniqueId,
                IMSI:item.IMSI,
                Status:item.State,
                lastActivity:lastActivity,
            }
        });
       
        
        data.value=structureDATA;

    }catch(e){
        console.log(e);
    }
}

onMounted(()=>{
    fetchData();
});  


const q = ref('')

// const filteredRows = computed(() => {
//   if (!q.value) {
//     return data
//   }

//   return data.filter((person) => {
//     return Object.values(person).some((value) => {
//       return String(value).toLowerCase().includes(q.value.toLowerCase())
//     })
//   })
// })

</script>