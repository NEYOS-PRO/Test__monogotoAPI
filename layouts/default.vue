<template>
     <UHorizontalNavigation :links="links" class="border-b border-gray-200 text-xs dark:border-gray-800"/>
    <div>
      <slot/>
    </div>
</template>

<script setup>
  const links = ref([
      { 
        label: 'Report',
        to: '/',
      },
      { 
        label: 'Sims',
        to: '/sims',
      }
      
    ])
</script>
  