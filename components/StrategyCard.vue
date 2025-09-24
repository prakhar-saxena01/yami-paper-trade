<template>
    <div class="bg-white rounded shadow p-6 mb-6">
      <h3 class="text-xl font-semibold mb-2">{{ title }}</h3>
      <p class="text-gray-700 mb-4">{{ description }}</p>
      <slot />
    </div>
  </template>
  
  <script setup lang="ts">
  const props = defineProps({ title: String, description: String })
  </script>  