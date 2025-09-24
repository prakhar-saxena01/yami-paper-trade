<template>
    <div>
      <h3 class="text-xl font-semibold mb-4">{{ title }}</h3>
      <ul class="list-decimal list-inside space-y-1 max-h-96 overflow-auto">
        <li v-for="trade in trades" :key="trade.buyTime" :class="type === 'profit' ? 'text-green-600' : 'text-red-600'">
          {{ trade.itemName }}: {{ trade.profitLoss.toFixed(2) }}
        </li>
      </ul>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps({
    title: String,
    trades: Array,
    type: {
      type: String,
      default: 'profit'
    }
  })
  </script>  