<template>
  <div v-if="!item.hidden">
    <template v-if="(item.children && item.children.length ===1 ) || !!!item.children">
      <el-menu-item :index="basePath">
        <el-icon v-if="item.meta.icon"><component :is="item.meta.icon"></component></el-icon>
        <template #title><span class="menu-title" :title="hasTitle(item.meta.title)">{{ item.meta.title }}</span></template>
      </el-menu-item>
    </template>
    <el-sub-menu v-else ref="subMenu" popper-append-to-body :index="basePath">
      <template v-if="item.meta" #title>
        <el-icon v-if="item.meta.icon"><component :is="item.meta.icon"></component></el-icon>
        <span class="menu-title" :title="hasTitle(item.meta.title)">{{ item.meta.title }}</span>
      </template>
      <sidebar-item
        v-for="child in item.children"
        :key="child.path"
        :is-nest="true"
        :item="child"
        :base-path="getPath(child.path)"
        class="nest-menu"
      />
    </el-sub-menu>
  </div>
</template>
<script setup>
import AppLink from './link'

const props = defineProps({
  item: {
    type: Object,
    required: true
  },
  isNest: {
    type: Boolean,
    default: false
  },
  basePath: {
    type: String,
    default: ''
  }
})
function getPath(url){
  return `${props.basePath}/${url}`;
}
function hasTitle(title){
  if (title.length > 5) {
    return title;
  } else {
    return "";
  }
}
</script>
<style lang="scss" scoped>
.el-menu--collapse {
  .el-tooltip__trigger{
    .menu-title{
      display: none;
    }
  }
}
</style>