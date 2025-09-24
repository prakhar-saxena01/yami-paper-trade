<template>
    <section>
      <h2 class="text-3xl font-bold mb-6">Trade Explainers</h2>
  
      <ExplainStep step="1" title="Trade Entry">
        <p>Understanding how to enter a trade.</p>
        <CandleChart :highlight="['buyPrice']" />
      </ExplainStep>
  
      <ExplainStep step="2" title="Stop Loss">
        <p>How to place and manage stop losses.</p>
        <CandleChart :highlight="['stopLossPrice']" />
      </ExplainStep>
  
      <ExplainStep step="3" title="Take Profit">
        <p>Setting profit targets for your trades.</p>
        <CandleChart :highlight="['tpPrice','tpP2']" />
      </ExplainStep>
  
      <ExplainStep step="4" title="Trade Exit">
        <p>Deciding when and how to exit trades.</p>
        <CandleChart :highlight="['exitPrice']" />
      </ExplainStep>
    </section>
  </template>
  
  <script setup lang="ts">
  import ExplainStep from '~/components/ExplainStep.vue'
  import CandleChart from '~/components/CandleChart.vue'
  </script>  