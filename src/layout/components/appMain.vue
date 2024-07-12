<template>
  <section class="app-main">
    <router-view>
    </router-view>
    <!-- <router-view v-slot="{ Component, route }">
      <transition name="fade-transform" mode="out-in">
          <component :is="Component" :key="route.path" />
      </transition>
    </router-view> -->
  </section>
</template>
<script setup>

</script>

<style lang="scss" scoped>
.app-main {
  height: calc(100vh - 60px);
  width: 100%;
  position: relative;
}
</style>