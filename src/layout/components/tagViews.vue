<template>
  <div class="tag-views">
    <div class="item" :class="{active:item.title ===activeMenu}" closable v-for="(item,i) in routeList" :key="i" @click="changeRoute(item)">
      <span class="item-name">{{ item.title }}</span>
      <el-icon v-if="item.title!=='首页'"><Close @click.stop="closeTag(item,i)"/></el-icon>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import globalStore from '@/stores/globa'
const route = useRoute()
const router = useRouter()
const global = globalStore()
const { routeList,cacheNames,cmpNames } = storeToRefs(global)
const activeMenu = computed(() => {
  const { meta } = route;
  return meta.title;
});
const checkRouteComponentName= (name, file)=> {
    if (cmpNames.value[name]) {
      if (cmpNames.value[name] !== file) {
        console.warn(`${file} 与${cmpNames.value[name]} 组件名称重复： ${name}`)
      }
    } else {
      cmpNames.value[name] = file
    }
}
  // 添加缓存的路由组件
const  addCache = (componentName)=> {
  if (Array.isArray(componentName)) {
    componentName.forEach(addCache)
    return
  }

  if (!componentName || cacheNames.value.includes(componentName)) return
  cacheNames.value.push(componentName)
}
watch(() => route, (_route) => {
  console.log(_route);
  _route.matched.forEach((routeMatch) => {
    const componentDef = routeMatch.components?.default
    const componentName = componentDef?.name || componentDef?.__name
    const file = componentDef?.__file
    checkRouteComponentName(componentName, file)
    if (routeMatch.meta.keepAlive) {
        if (!componentName) {
          console.warn(`${routeMatch.path} 路由的组件名称name为空`)
          return
        }
        addCache(componentName)
      }
  })
  const titles = routeList.value.map(item => item.title)
  if (!titles.includes(_route.meta.title)) {
    routeList.value.push({
      fullpath: _route.fullPath,
      title: _route.meta.title,
    })
  }
},{
  immediate: true,
  deep: true
})

const changeRoute = (item) => {
  if (item.title === activeMenu.value) return
  router.push(item.fullpath)
}
const closeTag = (item, i) => { 
  routeList.value.splice(i, 1)
  cacheNames.value.splice(i-1,1)
  if (item.title !== activeMenu.value) return;
  router.push(routeList.value[i-1].fullpath)
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