import Vue from 'vue'
import Router from 'vue-router'
import dashboard from '../pages/Dashboard';
import aidesocial from '../pages/AideSocial';
import Membre from '../pages/Membre';
import compte from '../pages/MonCompte';

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/',name:"dashboard", component:dashboard,  },
    { path: '/mon-compte',name:"moncompte", component:compte,  },
    { path: '/membre',name:"membre", component:Membre,  },
    { path: '/aide-social',name:"aidesocial", component:aidesocial,  }
    
  ],
  mode: 'history',
  base: process.env.BASE_URL,
})
