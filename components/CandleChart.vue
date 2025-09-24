<template>
    <div class="flex space-x-1">
      <div v-for="(candle, idx) in candles" :key="idx" 
           :class="['w-6 h-20 rounded', isHighlighted(idx) ? 'ring-4 ring-offset-1 ring-indigo-500' : 'bg-gray-400']" />
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue'
  
  const props = defineProps({
    highlight: Array // array of candle names
  })
  
  const candleMap = {
    buyPrice: 2,
    stopLossPrice: 4,
    tpPrice: 6,
    tpP2: 7,
    exitPrice: 8
  }
  
  const candles = Array(10).fill(0)
  
  function isHighlighted(index) {
    if (!props.highlight) return false
    return props.highlight.some(name => candleMap[name] === index)
  }
  </script>  