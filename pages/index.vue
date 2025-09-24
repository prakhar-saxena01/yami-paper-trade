<template>
    <section>
      <h2 class="text-4xl font-extrabold mb-6 text-center">{{ siteName }}</h2>
  
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <StatWidget title="Total Profit" :value="totalProfit" positive />
        <StatWidget title="Total Loss" :value="totalLoss" />
        <StatWidget title="Number of Trades" :value="trades.length" />
      </div>
  
      <ProfitChart :chart-data="profitChartData" />
  
      <div class="mt-12">
        <h3 class="text-2xl font-semibold mb-4">Recent Trades</h3>
        <TradeList :trades="recentTrades" />
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import StatWidget from '~/components/StatWidget.vue'
  import ProfitChart from '~/components/ProfitChart.vue'
  import TradeList from '~/components/TradeList.vue'
  import { parseTradeData } from '~/utils/tradeUtils'
  
  const { public: { siteName } } = useRuntimeConfig()
  const trades = ref([])
  const totalProfit = ref(0)
  const totalLoss = ref(0)
  const profitChartData = ref(null)
  const recentTrades = ref([])
  
  onMounted(async () => {
    const res = await fetch('/data/sample-trades.csv')
    const csvText = await res.text()
    trades.value = parseTradeData(csvText)
  
    totalProfit.value = trades.value.filter(t => t.profitLoss > 0).reduce((a, t) => a + t.profitLoss, 0)
    totalLoss.value = trades.value.filter(t => t.profitLoss < 0).reduce((a, t) => a + t.profitLoss, 0)
    recentTrades.value = trades.value.slice(-5).reverse()
  
    let dailyMap = {}
    trades.value.forEach(tr => {
      if (!dailyMap[tr.date]) dailyMap[tr.date] = 0
      dailyMap[tr.date] += tr.profitLoss
    })
    const labels = Object.keys(dailyMap).sort()
    const data = labels.map(d => dailyMap[d])
    profitChartData.value = {
      labels,
      datasets: [{
        label: 'Daily Profit/Loss',
        backgroundColor: data.map(v => v > 0 ? '#34d399' : '#f87171'),
        borderColor: '#2563eb',
        data,
        fill: false,
        tension: 0.3
      }]
    }
  })
  

function useRuntimeConfig(): { public: { siteName: any } } {
    throw new Error('Function not implemented.')
}
</script>  