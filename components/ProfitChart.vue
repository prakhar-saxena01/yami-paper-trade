<script setup lang="ts">
import { Line } from 'vue-chartjs'
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)
defineProps({ chartData: Object })
</script>

<template>
  <Line :chart-data="chartData" />
</template>