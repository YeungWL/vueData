<template>
  <div class="home" v-title data-title="主页">
    <img alt="Vue logo" src="../assets/logo.png">
    <p>日历插件</p>
    <date-picker/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { menuList } from 'assets/js/menu'

export default {
  name: 'home',
  created () {
    console.log(menuList)
  }
}
</script>
