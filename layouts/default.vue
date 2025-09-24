<template>
    <div class="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <header class="bg-indigo-600 text-white p-4 flex justify-between items-center">
        <h1 @click="$router.push('/')" class="text-2xl font-bold cursor-pointer">{{ siteName }}</h1>
        <nav class="space-x-4">
          <NuxtLink to="/">Dashboard</NuxtLink>
          <NuxtLink to="/trades">Trades</NuxtLink>
          <NuxtLink to="/strategies">Strategies</NuxtLink>
          <NuxtLink to="/best-worst">Best & Worst</NuxtLink>
          <NuxtLink to="/explainers">Explainers</NuxtLink>
          <NuxtLink to="/settings">Settings</NuxtLink>
        </nav>
      </header>
      <main class="p-6 max-w-7xl mx-auto">
        <slot />
      </main>
    </div>
  </template>
  
  <script setup lang="ts">
  const { public: { siteName } } = useRuntimeConfig()
  
function useRuntimeConfig(): { public: { siteName: any; }; } {
    throw new Error('Function not implemented.');
}
</script>
  