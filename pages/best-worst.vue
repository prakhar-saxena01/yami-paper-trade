<template>
    <section>
      <h2 class="text-3xl font-bold mb-6">Best & Worst Trades</h2>
  
      <div class="grid md:grid-cols-2 gap-6">
        <Leaderboard title="Top Profits" :trades="bestTrades" type="profit" />
        <Leaderboard title="Biggest Losses" :trades="worstTrades" type="loss" />
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import Leaderboard from '~/components/Leaderboard.vue'
  import { parseTradeData } from '~/utils/tradeUtils'
  
  const bestTrades = ref([])
  const worstTrades = ref([])
  
  onMounted(async () => {
    const res = await fetch('/data/sample-trades.csv')
    const csvText = await res.text()
    const trades = parseTradeData(csvText)
    bestTrades.value = trades.filter(t => t.profitLoss > 0).sort((a, b) => b.profitLoss - a.profitLoss).slice(0, 10)
    worstTrades.value = trades.filter(t => t.profitLoss < 0).sort((a, b) => a.profitLoss - b.profitLoss).slice(0, 10)
  })
  </script>  