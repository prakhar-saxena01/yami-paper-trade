<template>
    <section>
      <h2 class="text-3xl font-bold mb-6">Settings</h2>
  
      <div class="mb-6">
        <label class="block mb-2 font-semibold">Upload New Trade Data (CSV):</label>
        <CSVUploader @dataUploaded="handleNewData" />
        <p v-if="uploadMessage" class="mt-2 text-indigo-700">{{ uploadMessage }}</p>
      </div>
  
      <div>
        <label class="block mb-2 font-semibold">Theme:</label>
        <select v-model="theme" @change="applyTheme" class="border rounded p-2">
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="bollywood">Bollywood</option>
        </select>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import CSVUploader from '~/components/CSVUploader.vue'
  
  const uploadMessage = ref('')
  const theme = ref('light')
  
  function applyTheme() {
    document.documentElement.dataset.theme = theme.value
  }
  
  function handleNewData(csv) {
    uploadMessage.value = 'New trade data uploaded successfully!'
    // TODO: Broadcast or reload global trade data
  }
  </script>