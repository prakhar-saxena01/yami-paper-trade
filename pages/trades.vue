<template>
    <section>
      <h2 class="text-3xl font-bold mb-6">Trade Explorer</h2>
  
      <CSVUploader @dataUploaded="handleNewData" />
  
      <div class="mt-8 flex flex-wrap gap-4 items-center justify-between">
        <div>
          <label>Date Filter:</label>
          <input type="date" v-model="filters.date" class="border rounded p-1" />
        </div>
        <div>
          <label>Item Name:</label>
          <input type="text" v-model="filters.itemName" placeholder="e.g. SOLUSD" class="border rounded p-1" />
        </div>
        <div>
          <label>Profit/Loss:</label>
          <select v-model.number="filters.profitLossComparison" class="border rounded p-1">
            <option :value="null">All</option>
            <option :value="1">Profit > 0</option>
            <option :value="-1">Loss < 0</option>
          </select>
        </div>
      </div>
  
      <TradeList :trades="filteredTrades" />
    </section>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue'
  import CSVUploader from '~/components/CSVUploader.vue'
  import TradeList from '~/components/TradeList.vue'
  import { parseTradeData } from '~/utils/tradeUtils'
  
  const trades = ref([])
  const filters = ref({ date: '', itemName: '', profitLossComparison: null })
  
  function handleNewData(csvText) {
    trades.value = parseTradeData(csvText)
  }
  
  const filteredTrades = computed(() => trades.value.filter(tr => {
    if (filters.value.date && tr.date !== filters.value.date) return false
    if (filters.value.itemName && !tr.itemName.toLowerCase().includes(filters.value.itemName.toLowerCase())) return false
    if (filters.value.profitLossComparison === 1 && tr.profitLoss <= 0) return false
    if (filters.value.profitLossComparison === -1 && tr.profitLoss >= 0) return false
    return true
  }))
  </script>  