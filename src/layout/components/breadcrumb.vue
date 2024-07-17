<template>
  <div class="breadcrumb">
    <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="(item,i) in routes">
        {{ item.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
  </div>
</template>

<script setup>
const route = useRoute()
const routes = ref([])
watch(() => route, (val) => {
  if (val.matched.length === 2 && val.matched[0].path === val.matched[1].path) {
    routes.value = [{
      title: val.matched[1].meta.title,
      fullpath: val.matched[1].path
    }]
  } else {
    routes.value = val.matched.map(item => {
      return {
        title: item.meta.title,
        fullpath: item.path
      }
    })
  }
}, {
  immediate: true,
  deep:true
})

</script>
<style lang='scss' scoped>
.breadcrumb{
  height: 40px;
  padding-left: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
}
</style>