<template>
    <div>
      <label class="block mb-1 font-semibold">Risk:Reward Ratio: {{ ratio.toFixed(1) }} : 1</label>
      <input type="range" min="0.5" max="5" step="0.1" v-model.number="ratio" />
      <div class="mt-3 flex space-x-1">
        <div v-for="n in riskCoins" :key="'risk-' + n" class="w-6 h-6 rounded-full bg-red-500 animate-pulse"></div>
        <div v-for="n in rewardCoins" :key="'reward-' + n" class="w-6 h-6 rounded-full bg-green-500"></div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue'
  const ratio = ref(1)
  const maxCoins = 5
  
  const riskCoins = computed(() => Array(maxCoins).fill(0))
  const rewardCoins = computed(() => Array(Math.round(ratio.value * maxCoins)).fill(0))
  </script>
  