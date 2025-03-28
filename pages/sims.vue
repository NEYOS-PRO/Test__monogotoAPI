<template>
    <div>

        <section class="flex justify-between items-center p-3">

            <div class="flex  justify-start px-3 py-3.5">
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
        <div v-if="data.length>0">
          <UPagination v-if="q === '' && data.length>pageCount" class="flex justify-center mt-3" size="xs" v-model="page" :page-count="pageCount" :total="items.length" />
        </div>

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
const pageCount= 6;

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
  let filteredData = data.value;

  if (q.value) {
    filteredData = data.value.filter((row) => {
      return Object.values(row).some((value) => {
        return String(value).toLowerCase().includes(q.value.toLowerCase());
      });
    });
  }

  // Appliquer la pagination après le filtrage
  const start = (page.value - 1) * pageCount;
  const end = start + pageCount;
  return filteredData.slice(start, end);
});


/**
 * Recupération de l'id de la SIM sélectionnée...
 * @param row 
 */

 function select(row) {
  const index = selected.value.findIndex(item => item === row['ICCID']);
  if (index === -1) {
    // Ajouter l'élément s'il n'est pas déjà sélectionné
    selected.value.push(row['ICCID']);
  } else {
    // Supprimer l'élément s'il est déjà sélectionné
    selected.value.splice(index, 1);
  }
  console.log('=> ICCIDs Selected:', selected.value);
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

const isModalOpen = ref(false); 

/**
 * Modal Message
 */
const modalMEssage = ref(null); 
const modalMessageOpen = ref(false);

/**
 * Activate multiple SIMs
 */
 const ActivateSim = async () => {
  // Filtrer les ICCIDs valides (non null et non vides)
  const ICCIDs = selected.value
    .map(sim => sim['ICCID'])
    .filter(iccid => iccid && iccid.trim() !== '');

  if (ICCIDs.length === 0) {
    console.log('No valid SIMs selected for activation');
    return;
  }

  try {
    const response = await fetch(`${runtimeConfig.public.URL_REQUEST}/update_thing_status`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        iccids: ICCIDs,
        status: 'ACTIVE',
      }),
    });

    const result = await response.json();

    if (response.ok) {
      // console.log('SIMs activated successfully:', result);
      modalMEssage.value = 'SIMs activated successfully';
      selected.value = [];
      modalMessageOpen.value = true;

      // Close modal after 2 seconds and refresh data
      setTimeout(async () => {
        modalMessageOpen.value = false;
        selected.value = [];
        await fetchData(); // Fetch updated data
      }, 2000);
    } else {
      console.error('Failed to activate SIMs:', result);
    }
  } catch (error) {
    console.error('Error activating SIMs:', error);
  }
};

/**
 * Deactivate multiple SIMs
 */
const DesactivateSim = async () => {
  // Filtrer les ICCIDs valides (non null et non vides)
  const ICCIDs = selected.value
    .map(sim => sim['ICCID'])
    .filter(iccid => iccid && iccid.trim() !== '');

  if (ICCIDs.length === 0) {
    console.log('No valid SIMs selected for deactivation');
    return;
  }

  try {
    const response = await fetch(`${runtimeConfig.public.URL_REQUEST}/update_thing_status`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        iccids: ICCIDs,
        status: 'SUSPENDED',
      }),
    });

    const result = await response.json();

    if (response.ok) {
      // console.log('SIMs deactivated successfully:', result);
      modalMEssage.value = 'SIMs deactivated successfully';
      selected.value = [];
      modalMessageOpen.value = true;
      isModalOpen.value = false;

      // Close modal after 2 seconds and refresh data
      setTimeout(async () => {
        modalMessageOpen.value = false;
        selected.value = [];
        await fetchData(); // Fetch updated data
      }, 2000);
    } else {
      console.error('Failed to deactivate SIMs:', result);
    }
  } catch (error) {
    console.error('Error deactivating SIMs:', error);
  }
};




</script>