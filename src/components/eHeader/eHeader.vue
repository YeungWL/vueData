<template>
  <el-header class="e-header">
    <el-dropdown class="m-dropdown" @command="handleCommand" trigger="click">
      <span class="dropdown-link">
        王小虎<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>查看</el-dropdown-item>
        <el-dropdown-item>新增</el-dropdown-item>
        <el-dropdown-item divided command="logout">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-header>
</template>

<script>
export default {
  name: 'e-header',
  methods: {
    handleCommand (command) {
      switch (command) {
        case 'logout':
          console.log('已退出')
          this.logout()
          break
      }
    },
    logout () {
      this.$store.dispatch('loginOut').then(() => {
        this.$router.push({path: '/login'})
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.e-header {
  font-size: 12px;
  .m-dropdown {
    float: right;
  }
  .dropdown-link {
    cursor: pointer;
  }
}
</style>
