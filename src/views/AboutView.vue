<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script setup>
import {register,login} from '@/api'
onMounted(() => {
  console.log('about重新加载');
  registerSys()
  loginSys()
})
onBeforeUnmount(() => {
  console.log('about销毁');
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
    h1{
      font-size: 28px;
    }
  }
</style>
