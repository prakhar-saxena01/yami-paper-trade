<template>
    <div 
      @drop.prevent="onDrop" 
      @dragover.prevent
      class="border-4 border-dashed border-indigo-400 p-6 rounded-md text-center cursor-pointer hover:bg-indigo-100"
      @click="$refs.fileInput.click()"
    >
      <p>Drop CSV here or click to select file</p>
      <input type="file" ref="fileInput" class="hidden" accept=".csv" @change="onFileChange" />
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, defineEmits } from 'vue'
  const emit = defineEmits(['dataUploaded'])
  const fileInput = ref(null)
  
  function onFileChange(e) {
    readFile(e.target.files[0])
  }
  
  function onDrop(e) {
    readFile(e.dataTransfer.files[0])
  }
  
  function readFile(file) {
    if (!file) return
    const reader = new FileReader()
    reader.onload = (ev) => emit('dataUploaded', ev.target.result)
    reader.readAsText(file)
  }
  </script>  