<template>
    <div class="index">{{ msg }}</div>
    <el-button type="primary">测试</el-button>
</template>
<script setup>
const msg = ref('Hello Vue 3 + Vite')
const route = useRoute()
console.log(route);
</script>
