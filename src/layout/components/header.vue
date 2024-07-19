<template>
  <div class="hearder">
    <div>这是头部</div>
  </div>
</template>
<script setup>
import useGlobaStore from '@/stores/globa'
import { storeToRefs } from 'pinia'
const globalStore = useGlobaStore();
const {isCollapse} = storeToRefs(globalStore);
</script>
<style lang='scss' scope>
.hearder{
  width:100%;
  height:60px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>