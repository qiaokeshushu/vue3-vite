<template>
 <div class="app-main">
  <TagViews></TagViews>
  <Breadcrumb></Breadcrumb>
  <section class="contanier">
    已缓存页面：{{ cacheNames }}
    <router-view v-slot="{ Component, route }">
      <transition name="fade-transform" mode="out-in">
        <keep-alive :include="cacheNames"> 
            <component :is="Component" :key="route.path"/>
        </keep-alive>
      </transition>
    </router-view>
  </section>
</div>
</template>
<script setup>
import TagViews from './tagViews.vue'
import Breadcrumb from './breadcrumb'
import globalStore from '@/stores/globa'
import { storeToRefs } from 'pinia'
const global = globalStore()
const { routeList,cacheNames } = storeToRefs(global)
const titles = computed(() => {
  return routeList.value.map(item => item.title)
})
</script>

<style lang="scss" scoped>
.app-main {
  width: 100%;
  position: relative;
  flex:1;
  .contanier{
    height: calc(100vh - 190px);
    position: relative;
    padding:20px;
    overflow: hidden;
  }
}
</style>