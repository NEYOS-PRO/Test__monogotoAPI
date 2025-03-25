<template>
    <div>

        <section class="flex justify-between items-center p-3">

            <div class="flex justify-start px-3 py-3.5">
                <UInput v-model="q" placeholder="Filter ICCID..." />
            </div>

            <div class="flex space-x-3 justify-end md:space-x-3 px-3 py-3.5 dark:border-gray-700">
                    <USelectMenu v-model="selectedColumns" :options="columns" multiple placeholder="Columns"/>
                    <UButton
                        size="xs"
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

        </section>
        

        <UTable
         class="txt-xs"
         :loading-state="{ icon: 'i-heroicons-arrow-path-20-solid', size:56, label: 'Chargement des cartes SIMS...' }"
         :progress="{ color: 'info', animation: 'swing' }"
         :columns="selectedColumns" :rows="filteredRows" v-model="selected" @select="select" v-model:expand="expand" :loading="loading === 'pending'">
            <!--  -->
            <template #expand="{ row }">
                <div>
                  <pre>{{ row }}</pre>
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

const runtimeConfig = useRuntimeConfig(); 

const selected = ref([]); 
const data = ref([]);

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
  { key: 'lastActivity', label: 'last Activity', sortable: true }, 
];
const selectedColumns = ref([...columns]);

const secondaryColumns = [
  { key: 'Operators', label: 'Operators' }, // Add Operators column
  { key: 'Data', label: 'Data' },
  // { key: 'Total', label: 'Total' }

];


const fetchData = async () => {
    loading.value = "pending";
    try {
        const res = await fetch(`${runtimeConfig.public.URL_REQUEST}/list_of_things`); 
        const jsonData = await res.json();
        const structureDATA = jsonData.map((item) => {
            const lastActivity = item.LastLocationUpdateTime ? item.LastLocationUpdateTime : "No data"; // if there is no data, it will show "No data"
            return {
                ICCID: item.ExternalUniqueId,
                IMSI: item.IMSI,
                Status: item.State,
                lastActivity: lastActivity,
            }
        });
        data.value = structureDATA;
        loading.value = "idle";
    } catch (e) {
        console.log(e);
    }
}

onMounted(() => {
    fetchData();
});



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
      setTimeout(async () => {
        modalMessageOpen.value = false;
        selected.value = [];
        await fetchData(); // Fetch updated data
      }, 2000);
    }
  } catch (error) {
    console.log(error);
  }
}

/**
 * Desactivate des SIMs
 */
const DesactivateSim = async () => {

  const ICCID = selected.value[0]['ICCID'];

  console.log('ICCID:', ICCID);

  try {
    const response = await fetch(`${runtimeConfig.public.URL_REQUEST}/update_thing_status/${ICCID}/SUSPENDED`);

    if (response.ok) {
      console.log('SIMs Desactivate successfully');
      modalMEssage.value = 'SIMs Desactivate successfully';
      selected.value = [];
      modalMessageOpen.value = true;
      isModalOpen.value = false;
      /**
       * Après 2 sec désactivé le modal
       */
      setTimeout(async () => {
        modalMessageOpen.value = false;
        selected.value = [];
        await fetchData(); // Fetch updated data
      }, 2000);
    } else {
      const errorText = await response.text();
      console.log('Failed to desactivate SIM:', errorText);
    }
  } catch (error) {
    console.log('Error:', error);
  }
}


</script>