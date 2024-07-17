<template>
  <div class="tag-views">
    <div class="item" :class="{active:item.title ===activeMenu}" closable v-for="(item,i) in routeList" :key="i" @close="handleClose(i)" @click="changeRoute(item)">
      <span class="item-name">{{ item.title }}</span>
      <el-icon v-if="item.title!=='首页'"><Close @click="close(item,i)"/></el-icon>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import globalStore from '@/stores/globa'
const route = useRoute()
const router = useRouter()
const global = globalStore()
const { routeList } = storeToRefs(global)
const activeMenu = computed(() => {
  const { meta } = route;
  return meta.title;
});
watch(() => route, (val) => {
  const titles = routeList.value.map(item => item.title)
  if (!titles.includes(val.meta.title)) {
    setTimeout(()=>{
      routeList.value.push({
      fullpath: val.fullPath,
      title: val.meta.title
    })
    })
  }
}, {
  immediate: true,
  deep:true
})
const changeRoute = (item) => {
  if (item.title === activeMenu.value) return
  router.push(item.fullpath)
}
const close = (item,i) => { 
  routeList.value.splice(i, 1)
  if (item.title !== activeMenu.value) return;
  setTimeout(() => {
    router.push(routeList.value[i-1].fullpath)
  }, 10);
  
}
</script>
<style lang='scss' scoped>
.tag-views{
  display: flex;
  align-items: center;
  column-gap: 10px;
  height: 50px;
  background: #f5f5f5;
  padding-left: 10px;

}
.item{
  min-width: 30px;
  padding:5px 15px;
  background-color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  column-gap: 10px;
  &.active{
    background: #000;
    color:#fff
  }
  .item-name{
    font-size: 14px;
  }
  .el-icon{
    font-size: 14px;
  }
}
</style>