<template>
  <div>
    <nav>
    <router-link to="/"> UserDetail</router-link>
    <router-link to="/users">Users</router-link>
  </nav>
    <router-view></router-view>
  </div>

</template>

<script >


export default {

};
</script>
import {RouterView,RouterLink} from 'vue-router'
<style scoped>

</style>