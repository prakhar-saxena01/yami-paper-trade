<template>
    <div class="bg-white rounded-lg shadow p-6 text-center">
      <h4 class="text-sm font-medium text-gray-900">{{ title }}</h4>
      <p :class="positive ? 'text-green-600' : 'text-red-600'" class="text-3xl font-bold">
        {{ value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}
      </p>
    </div>
  </template>
  
  <script setup lang="ts">
  const props = defineProps({
    title: String,
    value: Number,
    positive: Boolean
  })
  </script>