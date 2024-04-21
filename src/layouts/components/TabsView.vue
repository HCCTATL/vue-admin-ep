<template>
  <div class="tabs">
    <el-dropdown trigger="contextmenu" placement="bottom-end">
      <el-tabs
        v-model="editableTabsValue"
        type="card"
        tab-position="bottom"
        class="demo-tabs"
        closable
        @tab-remove="removeTab"
        @tab-click="tabClick"
      >
        <el-tab-pane
          v-for="item in editableTabs"
          :key="item.name"
          :label="item.title"
          :name="item.name"
        >
        </el-tab-pane>
      </el-tabs>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item :icon="Plus">Action 1</el-dropdown-item>
          <el-dropdown-item :icon="CirclePlusFilled"> Action 2 </el-dropdown-item>
          <el-dropdown-item :icon="CirclePlus">Action 3</el-dropdown-item>
          <el-dropdown-item :icon="Check">Action 4</el-dropdown-item>
          <el-dropdown-item :icon="CircleCheck">Action 5</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import { onCreated, ref } from 'vue'
import {
  ArrowDown,
  Check,
  CircleCheck,
  CirclePlus,
  CirclePlusFilled,
  Plus
} from '@element-plus/icons-vue'

let tabIndex = 2
const editableTabsValue = ref('2')
const editableTabs = ref([
  {
    title: 'Tab 1',
    name: '1',
    content: 'Tab 1 content'
  },
  {
    title: 'Tab 2',
    name: '2',
    content: 'Tab 2 content'
  }
])

function tabClick(pane: TabsPaneContext) {
  console.log(pane.paneName)
}

function removeTab(targetName: string) {
  console.log(targetName)
}
</script>

<style lang="scss" scoped></style>
