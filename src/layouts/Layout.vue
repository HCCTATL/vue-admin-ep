<template>
  <div class="layout">
    <el-container>
      <el-aside width="200px">
        <MenuView></MenuView>
      </el-aside>
      <el-container>
        <HeaderView></HeaderView>
        <TabsView></TabsView>
        <el-main>
          <RouterView></RouterView>
        </el-main>
        <el-footer height="30px">
          <FooterView />
        </el-footer>
      </el-container>
    </el-container>
    <!-- <MenuView></MenuView> -->
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import MenuView from './components/MenuView.vue'
import HeaderView from './components/HeaderView.vue'
import FooterView from './components/FooterView.vue'
import TabsView from './components/TabsView.vue'
</script>

<style lang="scss" scoped>
.layout {
  height: 100vh;
}
</style>
