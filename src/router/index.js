import Vue from 'vue'
import Router from 'vue-router'
import dashboard from '../pages/Dashboard.vue';
import aidesocial from '../pages/AideSocial.vue';
import Membre from '../pages/Membre.vue';
import compte from '../pages/MonCompte.vue';

Vue.use(Router)

export default new Router({
  routes: [
    { path: "/",name:"dashboard", component:dashboard,  },
    { path: "/moncompte",name:"moncompte", component:compte,  },
    { path: "/membre",name:"membre", component:Membre,  },
    { path: "/aidesocial",name:"aidesocial", component:aidesocial,  }
    
  ],
  mode: 'history',
  base: process.env.BASE_URL,
})
