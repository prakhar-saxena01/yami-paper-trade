<template>
    <div class="max-w-xl mx-auto p-4 bg-white rounded shadow">
      <h3 class="font-semibold mb-4">Trade Price Action</h3>
      <canvas ref="chartRef" height="300"></canvas>
      <div class="mt-3 text-sm text-gray-600 space-y-1">
        <p>Buy: {{ trade.buyPrice }} at {{ trade.buyTime }}</p>
        <p>Stop Loss: {{ trade.stopLossPrice }} at {{ trade.slTime }}</p>
        <p>Take Profit(s): {{ trade.tpPrice }} ({{ trade.tpTime }}), {{ trade.tpP2 }} ({{ trade.tpT2 }})</p>
        <p>Exit: {{ trade.exitPrice }} at {{ trade.exitTime }}</p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, watch } from 'vue'
  import { Chart, registerables } from 'chart.js'
  Chart.register(...registerables)
  
  const props = defineProps({ trade: Object })
  
  const chartRef = ref(null)
  let chartInstance = null
  
  onMounted(initChart)
  watch(() => props.trade, initChart, { immediate: true })
  
  function initChart() {
    if (chartInstance) chartInstance.destroy()
    if (!chartRef.value || !props.trade) return
  
    const ctx = chartRef.value.getContext('2d')
    chartInstance = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Buy', 'Stop Loss', 'TP1', 'TP2', 'Exit'],
        datasets: [{
          label: 'Price',
          data: [
            props.trade.buyPrice,
            props.trade.stopLossPrice,
            props.trade.tpPrice,
            props.trade.tpP2,
            props.trade.exitPrice
          ],
          borderColor: '#3b82f6',
          backgroundColor: 'rgba(59,130,246,0.1)',
          fill: true,
          tension: 0.25,
          pointRadius: 6,
          pointBackgroundColor: ['green', 'red', 'orange', 'orange', 'black']
        }]
      },
      options: { responsive: true, plugins: { legend: { display: false } } }
    })
  }
  </script>  