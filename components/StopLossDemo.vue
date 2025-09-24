<template>
    <div class="p-4 bg-white border rounded shadow">
      <h4 class="font-semibold mb-2">Stop Loss Demo</h4>
      <div class="flex space-x-1 text-center text-sm">
        <div v-for="(candle, idx) in candles" :key="idx" :class="['w-6 h-20 rounded', candle.color, candle.highlight ? 'ring-4 ring-offset-1 ring-red-600' : '']">
          <div class="bg-white mx-auto rounded h-2 mt-2"></div>
        </div>
      </div>
      <p class="mt-2 text-gray-700">Red highlighted candle shows the stop loss point.</p>
    </div>
  </template>
  
  <script setup>
  const candles = [
    { color: 'bg-green-500', highlight: false },
    { color: 'bg-green-500', highlight: false },
    { color: 'bg-red-500', highlight: true },
    { color: 'bg-green-500', highlight: false },
    { color: 'bg-green-500', highlight: false }
  ]
  </script>
  