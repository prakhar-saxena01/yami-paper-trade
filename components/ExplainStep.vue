<template>
    <section class="border-l-4 border-indigo-600 pl-4 mb-6">
      <h3 class="text-xl font-semibold mb-2">Step {{ step }}: {{ title }}</h3>
      <slot />
    </section>
  </template>
  
  <script setup lang="ts">
  defineProps({
    step: [String, Number],
    title: String
  })
  </script>
  