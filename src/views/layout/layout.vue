<template>
  <el-container class="container">
    <e-aside/>
    <el-container class="main-container">
      <e-header style="width: 100%;"/>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import eAside from 'components/eAside/eAside'
import eHeader from 'components/eHeader/eHeader'

export default {
  name: 'layout',
  components: {
    eAside,
    eHeader
  }
}
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  .main-container {
    flex-direction: column;
  }
}
</style>
