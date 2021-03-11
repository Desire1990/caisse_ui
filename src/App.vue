<template>
   <div id="app">
     <div class="main" v-if="logged_in">
        <!-- <TopBar/> -
        <SideBar/>
        <router-view />
        <div class="loggout" @click="logout"></div>
     </div>
   <div v-else>
      <Login @connected="performLogin"/>
  </div>
  </div>
</template>

<script>
import SideBar from './components/SideBar'
import TopBar from './components/TopBar'
import Login from './components/Login'

  export default  {
    components: { SideBar, TopBar, Login},
    data(){
      return {
        logged_in:false
      }
    },
    methods:{
      performLogin(user){
        console.log(user)
        this.logged_in=true;
      },
      logout(){
        if (confirm("Vous etes sur de vouloir vous deconnecter?")) {
          this.logged_in=true
        }
      }
    }
  };
</script>

<style scoped>


</style>>

</style>>

</style>
