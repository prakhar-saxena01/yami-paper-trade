<template>
    <section>
      <h2 class="text-3xl font-bold mb-6">Trading Strategies</h2>
  
      <StrategyCard title="Risk:Reward Ratio" description="Understand how risk vs reward impacts your trade outcome">
        <RiskRewardSlider />
      </StrategyCard>
  
      <StrategyCard title="Stop Loss Placement" description="The importance of stop losses for risk management">
        <StopLossDemo />
      </StrategyCard>
  
      <StrategyCard title="Take Profit Targets" description="Setting realistic profit goals">
        <TakeProfitDemo />
      </StrategyCard>
    </section>
  </template>
  
  <script setup lang="ts">
  import StrategyCard from '~/components/StrategyCard.vue'
  import RiskRewardSlider from '~/components/RiskRewardSlider.vue'
  import StopLossDemo from '~/components/StopLossDemo.vue'
  import TakeProfitDemo from '~/components/TakeProfitDemo.vue'
  </script>
  