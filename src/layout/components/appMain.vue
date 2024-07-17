<template>
 <div class="app-main">
  <TagViews></TagViews>
  <Breadcrumb></Breadcrumb>
  <section class="contanier">
    <index></index>
  </section>
</div>
</template>
<script setup>
import TagViews from './tagViews.vue'
import Breadcrumb from './breadcrumb'
import index from '@/components/index'
import globalStore from '@/stores/globa'
import { storeToRefs } from 'pinia'
const global = globalStore()
const { routeList } = storeToRefs(global)
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
    overflow: auto;
  }
}
</style>