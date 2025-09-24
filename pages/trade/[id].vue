<template>
    <section v-if="trade">
      <h2 class="text-3xl font-bold mb-4">Trade: {{ trade.itemName }} ({{ trade.type }})</h2>
  
      <div class="mb-6 p-4 bg-white rounded shadow space-y-2">
        <p><strong>Date:</strong> {{ trade.date }} <strong>Time:</strong> {{ trade.buyTime }}</p>
        <p><strong>Quantity:</strong> {{ trade.qty }}</p>
        <p><strong>Buy Price:</strong> {{ trade.buyPrice }}</p>
        <p><strong>Stop Loss Price:</strong> {{ trade.stopLossPrice }} ({{ trade.slTime }})</p>
        <p><strong>Take Profit Price(s):</strong> {{ trade.tpPrice }} ({{ trade.tpTime }}), {{ trade.tpP2 }} ({{ trade.tpT2 }})</p>
        <p><strong>Exit Price:</strong> {{ trade.exitPrice }} ({{ trade.exitTime }})</p>
        <p><strong>Profit/Loss:</strong> <span :class="trade.profitLoss > 0 ? 'text-green-600' : 'text-red-600'">{{ trade.profitLoss.toFixed(2) }}</span></p>
        <p><strong>Remarks:</strong> {{ trade.remarks }}</p>
      </div>
  
      <AnimatedTradeGraph :trade="trade" />
    </section>
    <div v-else>Loading trade...</div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import AnimatedTradeGraph from '~/components/AnimatedTradeGraph.vue'
  import { parseTradeData } from '~/utils/tradeUtils'
  
  const route = useRoute()
  const router = useRouter()
  const trade = ref(null)
  
  onMounted(async () => {
    const res = await fetch('/data/sample-trades.csv')
    const csvText = await res.text()
    const trades = parseTradeData(csvText)
    const id = route.params.id
    const foundTrade = trades.find(t => t.buyTime.replace(/:/g, '') === id)
    if (foundTrade) trade.value = foundTrade
    else router.push('/trades')
  })
  </script>  