<template>
  <div class="about">
    <h1>This is an play page</h1>
  </div>
</template>
<script setup>
import {register,login} from '@/api'
onMounted(() => {
  console.log('play重新加载');
  registerSys()
  loginSys()
})
onBeforeUnmount(() => {
  console.log('play销毁');
})
const registerSys = () => {
  register({ name: 1, age: 24 }).then((res) => {
    
  }).catch((error) => {
    // console.log(error);
  })
}
const loginSys = () => {
  login({ name: '你好', age: 24 }).then((res) => {
    
  }).catch((error) => {
    // console.log(error);
  })
}
</script>
<style>
  .about {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
