<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
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
