<template>
  <div class="side-bar">
    <el-scrollbar :class="sideTheme" wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :unique-opened="true"
        active-text-color="dark"
        :collapse-transition="false"
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
  </div>
</template>
<script setup>
import SidebarItem from "./sidebarItem";
import { constantRoutes } from "@/router";
const route = useRoute();
const sidebarRouters = computed(() => constantRoutes);
const activeMenu = computed(() => {
  const { meta, path } = route;
  // if set path, the sidebar will highlight the path you set
  if (meta.activeMenu) {
    return meta.activeMenu;
  }
  return path;
});
</script>
<style lang="scss" scope>
.side-bar{
  width: 200px;
  height: calc(100vh - 60px);
  background-color: #ddd;
  overflow: auto;
}
</style>