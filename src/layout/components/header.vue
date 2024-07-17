<template>
  <div class="hearder">
    <el-radio-group v-model="isCollapse">
      <el-radio-button :value="false">expand</el-radio-button>
      <el-radio-button :value="true">collapse</el-radio-button>
    </el-radio-group>
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