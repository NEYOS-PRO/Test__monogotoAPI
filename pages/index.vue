<template>
    <div class="p-6">
        <!-- Grille de cards -->
        <div v-if="status === 'success'" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Card Identification -->
            <UCard class="shadow-lg">
                <template #header>
                    <h2 class="text-xl font-bold">Identification</h2>
                </template>
                <div class="space-y-3">
                    <p>
                        <UTooltip text="Integrated Circuit Card Identifier - Numéro unique d'identification de la carte SIM">
                            <span class="font-semibold cursor-help border-b border-dotted">ICCID:</span>
                        </UTooltip> 
                        {{ apiData.ExternalUniqueId }}
                    </p>
                    <p>
                        <UTooltip text="International Mobile Subscriber Identity - Identifiant unique pour chaque utilisateur de téléphonie mobile">
                            <span class="font-semibold cursor-help border-b border-dotted">IMSI actif:</span>
                        </UTooltip>
                        {{ apiData.ActiveMobileSubscriber }}
                    </p>
                    <p>
                        <UTooltip text="Mobile Station International Subscriber Directory Number - Numéro de téléphone international">
                            <span class="font-semibold cursor-help border-b border-dotted">MSISDN:</span>
                        </UTooltip>
                        {{ apiData.MSISDN }}
                    </p>
                    <p>
                        <UTooltip text="International Mobile Equipment Identity - Numéro unique qui identifie le terminal mobile">
                            <span class="font-semibold cursor-help border-b border-dotted">IMEI:</span>
                        </UTooltip>
                            {{ apiData.IMEI }}
                        </p>
                </div>
            </UCard>

            <!-- Card État et Statut -->
            <UCard class="shadow-lg">
                <template #header>
                    <h2 class="text-xl font-bold">État et Statut</h2>
                </template>
                <div class="space-y-3">
                    <p>
                        <UTooltip text="État actuel de la carte SIM">
                            <span class="font-semibold cursor-help border-b border-dotted">État:</span>
                        </UTooltip>
                        {{ apiData.State }}
                    </p>
                    <p>
                        <UTooltip text="Dernière fois que l'appareil a mis à jour sa position sur le réseau">
                            <span class="font-semibold cursor-help border-b border-dotted">Dernière mise à jour:</span>
                        </UTooltip>
                        {{ apiData.LastLocationUpdateTime }}
                    </p>
                    <p>
                        <UTooltip text="Mobile Network Operator - Opérateur de réseau mobile">
                            <span class="font-semibold cursor-help border-b border-dotted">Opérateur (MNO):</span>
                        </UTooltip>
                        {{ apiData.MnoName }}
                    </p>
                </div>
            </UCard>

            <!-- Card Configuration réseau -->
            <UCard class="shadow-lg">
                <template #header>
                    <h2 class="text-xl font-bold">Configuration réseau</h2>
                </template>
                <div class="space-y-3">
                    <p>
                        <UTooltip text="Adresse IP attribuée à l'appareil">
                            <span class="font-semibold cursor-help border-b border-dotted">IP attribuée:</span>
                        </UTooltip>
                        {{ apiData.IPs[0]?.IP }}
                    </p>
                    <div class="mt-2">
                        <h3 class="font-bold mb-2">Localisation cellulaire:</h3>
                        <div class="space-y-2 pl-4">
                            <p>
                                <UTooltip text="Identifiant unique de la cellule réseau">
                                    <span class="font-semibold cursor-help border-b border-dotted">CellId:</span>
                                </UTooltip>
                                {{ apiData.CellId }}
                            </p>
                            <p>
                                <UTooltip text="Location Area Code - Code de la zone de localisation">
                                    <span class="font-semibold cursor-help border-b border-dotted">LAC:</span>
                                </UTooltip>
                                {{ apiData.Lac }}
                            </p>
                            <p>
                                <UTooltip text="Mobile Country Code - Code du pays">
                                    <span class="font-semibold cursor-help border-b border-dotted">MCC:</span>
                                </UTooltip>
                                {{ apiData.LastLocation?.MCC }}
                            </p>
                            <p>
                                <UTooltip text="Mobile Network Code - Code du réseau mobile">
                                    <span class="font-semibold cursor-help border-b border-dotted">MNC:</span>
                                </UTooltip>
                                {{ apiData.LastLocation?.MNC }}
                            </p>
                        </div>
                    </div>
                </div>
            </UCard>

            <!-- Card Abonnements mobiles -->
            <UCard class="shadow-lg">
                <template #header>
                    <h2 class="text-xl font-bold">Abonnements mobiles</h2>
                </template>
                <div>
                    <p class="mb-2">Identités mobiles:</p>
                    <ul class="list-disc pl-6 space-y-1">
                        <li v-for="identity in apiData.MobileIdentities" :key="identity">
                            {{ identity }}
                        </li>
                    </ul>
                </div>
            </UCard>

            <!-- Card Services -->
            <UCard class="shadow-lg">
                <template #header>
                    <h2 class="text-xl font-bold">Services</h2>
                </template>
                <div>
                    <p class="mb-2">Services disponibles:</p>
                    <ul class="list-disc pl-6 space-y-1">
                        <li v-for="(value, service) in apiData.Block" :key="service">
                            {{ service.replace(/_/g, ' ') }}: {{ value ? 'Activé' : 'Désactivé' }}
                        </li>
                    </ul>
                </div>
            </UCard>

            <!-- Card APNs -->
            <UCard class="shadow-lg">
                <template #header>
                    <h2 class="text-xl font-bold">APNs</h2>
                </template>
                <div class="space-y-4">
                    <div v-for="apn in apiData.APNs" :key="apn.Name" class="border-b pb-3 last:border-0">
                        <h3 class="font-semibold text-lg mb-2">{{ apn.Name }}</h3>
                        <div class="space-y-2 pl-4">
                            <p>
                                <UTooltip text="Identifiant court de l'APN">
                                    <span class="font-semibold cursor-help border-b border-dotted">ID:</span>
                                </UTooltip>
                                {{ apn.ShortId }}
                            </p>
                            <p>
                                <UTooltip text="Plage d'adresses IP">
                                    <span class="font-semibold cursor-help border-b border-dotted">Plage IP:</span>
                                </UTooltip>
                                {{ apn.IpRange }}
                            </p>
                            <p>
                                <UTooltip text="Support de la technologie LTE">
                                    <span class="font-semibold cursor-help border-b border-dotted">Support LTE:</span>
                                </UTooltip>
                                {{ apn.LteSupport ? 'Oui' : 'Non' }}
                            </p>
                            <p>
                                <UTooltip text="Support de la 5G">
                                    <span class="font-semibold cursor-help border-b border-dotted">Support 5G:</span>
                                </UTooltip>
                                {{ apn.Support5G ? 'Oui' : 'Non' }}
                            </p>
                            <div v-if="apn.hss" class="mt-3">
                                <p class="font-semibold mb-1">Configuration HSS:</p>
                                <div class="pl-4 space-y-1">
                                    <p>
                                        <UTooltip text="Bande passante maximale en téléchargement">
                                            <span class="font-semibold cursor-help border-b border-dotted">Bande passante DL:</span>
                                        </UTooltip>
                                        {{ formatBytes(apn.hss.ambr.maxRequestedBandwidthDL) }}/s
                                    </p>
                                    <p>
                                        <UTooltip text="Bande passante maximale en envoi">
                                            <span class="font-semibold cursor-help border-b border-dotted">Bande passante UL:</span>
                                        </UTooltip>
                                        {{ formatBytes(apn.hss.ambr.maxRequestedBandwidthUL) }}/s
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </UCard>

            <!-- Card Consommation -->
            <UCard class="shadow-lg">
                <template #header>
                    <h2 class="text-xl font-bold">Consommation</h2>
                </template>
                <div class="space-y-3">
                    <p>
                        <UTooltip text="Consommation de données en octets">
                            <span class="font-semibold cursor-help border-b border-dotted">Données:</span>
                        </UTooltip>
                        {{ formatBytes(apiData.ActualUsage.Data_) }}
                    </p>
                    <p>
                        <UTooltip text="Nombre de SMS envoyés">
                            <span class="font-semibold cursor-help border-b border-dotted">SMS envoyés:</span>
                        </UTooltip>
                        {{ apiData.ActualUsage.MO_SMS_CDR_ }}
                    </p>
                    <p>
                        <UTooltip text="Consommation voix en minutes">
                            <span class="font-semibold cursor-help border-b border-dotted">Voix:</span>
                        </UTooltip>
                        {{ apiData.ActualUsage.Voice_ }} minutes
                    </p>
                    <p>
                        <UTooltip text="Nombre d'alertes">
                            <span class="font-semibold cursor-help border-b border-dotted">Alertes:</span>
                        </UTooltip>
                        {{ apiData.ActualUsage.Alarm }}
                    </p>
                </div>
            </UCard>
        </div>

        <div v-if="status === 'pending'">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-12 stroke-slate- animate-spin ">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>
        </div>
    </div>
</template>

<script setup>

const url = ref('https://console.monogoto.io/thing/ThingId_ICCID_8999911240071508339');
// Fonction pour formater les octets en format lisible
const formatBytes = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

const { data:apiData, refresh, error, status } = await useFetch(`${url.value}`,{
    onRequest({ options }) {
    options.headers.set('Accept', 'application/json'),
    options.headers.set('Authorization', `Bearer ${process.env.Token}`)
  }
});

</script>


