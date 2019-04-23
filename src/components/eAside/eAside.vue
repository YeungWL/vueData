<template>
  <el-aside width="200px" class="e-aside">
    <el-menu :default-openeds="openeds"
             :default-active="activeIndex"
             @select="handleSelectMenu">
      <el-submenu :index="`${index + 1}`"
                  v-for="(item, index) in menuList"
                  :key="index">
        <template slot="title"><i :class="item.icon"></i>{{item.title}}</template>
        <el-menu-item-group>
          <el-menu-item v-for="(child, key) in item.children"
                        :key="key"
                        :index="`${index + 1}-${key + 1}`">{{child}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>

<script>
import { menuList } from 'assets/js/menu'

export default {
  name: 'e-aside',
  data () {
    return {
      activeIndex: '1-1',
      openeds: ['1']
    }
  },
  methods: {
    // 菜单激活函数
    handleSelectMenu (key, keyPath) {
      this.activeIndex = key
      let opened = []
      opened.push(keyPath[0])
      this.openeds = opened
      switch (key) {
        case '1-1': this.$router.push({ path: '/' }); break
      }
    }
  },
  created () {
    this.menuList = menuList
  }
}
</script>

<style lang="scss" scoped>
.e-aside {
  background-color: rgb(238, 241, 246);
  /deep/ .el-menu-item-group__title {
    display: none;
  }
}
</style>
