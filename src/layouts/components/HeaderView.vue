<template>
  <div class="header flex-item-center justify-between">
    <header class="flex-item-center">
      <el-icon size="20" style="margin-right: 5px"><Fold /></el-icon>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
        <el-breadcrumb-item>
          <a href="/">promotion management</a>
        </el-breadcrumb-item>
        <el-breadcrumb-item>promotion list</el-breadcrumb-item>
        <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
      </el-breadcrumb>
    </header>
    <header>hhh</header>
  </div>
</template>

<script setup>
import { Fold } from '@element-plus/icons-vue'
</script>

<style lang="scss" scoped>
.header {
  height: 40px;
  padding: 0 10px;
}

.flex-item-center {
  display: flex;
  align-items: center;
}
.justify-between {
  justify-content: space-between;
}
</style>
