<template>
  <router-view v-slot="{ Component, route }">
     <!-- <transition name="fade-transform" mode="out-in">
          <component :is="Component" :key="route.path" />
      </transition> -->
    <keep-alive>
      <component :is="Component" :key="route.path" />
    </keep-alive>
  </router-view>
</template>
<script setup>
import globalStore from '@/stores/globa'
import { storeToRefs } from 'pinia'
const global = globalStore()
const { routeList } = storeToRefs(global)
const titles = computed(() => {
  return routeList.value.map(item => item.title)
})
</script>