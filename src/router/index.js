import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '../pages/Dashboard';
import AideSocial from '../pages/AideSocial';
import Membre from '../pages/Membre';
import MonCompte from '../pages/MonCompte';

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/',name:"dashboard", component:Dashboard  },
    { path: '/mon-compte',name:"moncompte", component:MonCompte  },
    { path: '/membre',name:"membre", component:Membre  },
    { path: '/aide-social',name:"aidesocial", component:AideSocial  }
    
  ],
  mode: 'history',
  base: process.env.BASE_URL,
})
