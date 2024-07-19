<template>
  <div class="side-bar">
    <el-scrollbar :class="sideTheme" wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :default-openeds="[activeMenu]"
        :unique-opened="true"
        active-text-color="dark"
        collapse-transition
        :collapse="isCollapse"
        mode="vertical"
        router
      >
        <sidebar-item
          v-for="(route, index) in sidebarRouters"
          :key="route.path + index"
          :item="route"
          :base-path="route.path"
        />
      </el-menu>
    </el-scrollbar>
    <div class="side-bar-collapse">
      <el-icon v-if="!isCollapse" @click="close"><Fold /></el-icon>
      <el-icon v-else @click="open"><Expand /></el-icon>
    </div>
  </div>
</template>
<script setup>
import SidebarItem from "./sidebarItem";
import { constantRoutes } from "@/router";
import useGlobaStore from '@/stores/globa'
import { storeToRefs } from 'pinia'
const globalStore = useGlobaStore();
const {isCollapse} = storeToRefs(globalStore);
const route = useRoute();
const sidebarRouters = computed(() => constantRoutes);
const activeMenu = computed(() => {
  const { meta, path } = route;
  if (meta.activeMenu) {
    return meta.activeMenu;
  }
  return path;
});
const close = () => {
  globalStore.setCollapse(true);
}
const open = () => {
  globalStore.setCollapse(false);
}
</script>
<style lang="scss" scope>
.side-bar{
  height: calc(100vh - 60px);
  background-color: #545c64;
  overflow: auto;
  flex-shrink: 0;
  position: relative;
  .side-bar-collapse{
    position: absolute;
    right:0px;
    top: 0px;
    font-size: 20px;
    cursor: pointer;
    color:#fff
  }
}
.el-menu{
  background-color: #545c64;
  border:none;
  .menu-title{
    color:#fff;
  }
  .el-icon{
    color:#fff;
  }
  .el-menu-item:hover {
    background-color: #000;
  }
  .el-sub-menu__title:hover{
    background-color: #000;
  }
  .el-menu-item{
    .el-icon{
      color:#fff;
    }
    &.is-active{
      background-color: #000;
    }
  }
}
.el-menu:not(.el-menu--collapse) {
  width: 200px;
  height: 100%;
}
</style>