<template>
    <div class="overflow-x-auto">
      <table class="min-w-full border border-gray-300 divide-y divide-gray-300 text-sm">
        <thead class="bg-indigo-600 text-white">
          <tr>
            <th class="px-4 py-2 text-left">Date</th>
            <th class="px-4 py-2 text-left">Item</th>
            <th class="px-4 py-2 text-left">Type</th>
            <th class="px-4 py-2">Qty</th>
            <th class="px-4 py-2">Buy Price</th>
            <th class="px-4 py-2">Profit/Loss</th>
            <th class="px-4 py-2">Remarks</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="trade in trades" :key="trade.buyTime + trade.itemName">
            <td class="px-4 py-2">{{ trade.date }}</td>
            <td class="px-4 py-2">{{ trade.itemName }}</td>
            <td class="px-4 py-2">{{ trade.type }}</td>
            <td class="px-4 py-2 text-center">{{ trade.qty }}</td>
            <td class="px-4 py-2 text-center">{{ trade.buyPrice }}</td>
            <td :class="trade.profitLoss > 0 ? 'text-green-600' : 'text-red-600'" class="px-4 py-2 font-semibold text-center">
              {{ trade.profitLoss.toFixed(2) }}
            </td>
            <td class="px-4 py-2">{{ trade.remarks }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps({ trades: Array })
  </script>  