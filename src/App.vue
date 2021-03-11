<template>
   <div id="app">
     <div class="main" v-if="logged_in">
        <SideBar/>
        <TopBar/>
        <router-view />
        <div class="loggout" @click="logout"></div>
     </div>
   <div v-else>
      <Login @connected="performLogin"/>
  </div>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import SideBar from './components/SideBar'
</script>
<style scoped="">
	

<style>

</style>
