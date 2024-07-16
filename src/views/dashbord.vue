<template>
  <div class="dashbord">
    <div class="index">{{ msg }}</div>
    <el-button type="primary">测试</el-button>
  </div>
</template>
<script setup>
const msg = ref('Hello Vue 3 + Vite')
const route = useRoute()
</script>
<style>
  .dashbord {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>

