<template>
  <div>
    <nav>
    <router-link :to="{name: 'userForm'}"> UserDetail</router-link>
    <router-link :to="{name: 'userList'}">Users</router-link>
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