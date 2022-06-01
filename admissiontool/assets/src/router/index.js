import Vue from 'vue'
//import VueRouter from 'vue-router'
import Router from 'vue-router'
//import Router from 'vue-router'
import {formatRoutes} from '@/utils/routerUtil'

Vue.use(Router)


const loginIgnore = {
  names: ['login', 'verify'],      //
  paths: ['/login', '/verify'],   //fullPath
  /**
   * 
   * @param route vue-router route 
   * @returns {boolean}
   */
  includes(route) {
    return this.names.includes(route.name) || this.paths.includes(route.path)
  }
}

// const Loc_options = {


//  routes : [
//   // {
//   //   path: '/',
//   //   name: 'Home',
//   //   component: Home
//   // },
//   // {
//   //   path: '/about',
//   //   name: 'About',
//   //   // route level code-splitting
//   //   // this generates a separate chunk (about.[hash].js) for this route
//   //   // which is lazy-loaded when the route is visited.
//   //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    
//   // },
//   {
//     path: '/login',
//     name: 'login',
//     component: () => import('../views/noauth/login.vue')
//   },
//   {
//     path: '/verify',
//     name: 'verify',
//     component: () => import('../views/noauth/verify.vue')
//   },

//   {
//     path: '/register',
//     name: 'register',
//     component: () => import('../views/noauth/register.vue')
//   },
//   {
//     path: '/unauthorized',
//     name: 'unauthorized',
//     component: () => import('../views/noauth/403.vue')
//   },
//   {
//     path: '/notexist',
//     name: 'notexist',
//     component: () => import('../views/noauth/503.vue')
//   },


//   {
//     path: '/',
//     name: 'Home',
//     component: () => import('../views/auth/home.vue')
//     //component: () => import('../views/Home.vue')
//   },


// ]
// }


const Loc_options = {

  routes : [


  {
    path: '/403',
    name: 'unauthorized',
    component: () => import('../views/noauth/403.vue')
  },
  {
    path: '/verify',
    name: 'verify',
    component: () => import('../views/noauth/verify.vue')
  },
  {
    path: '/',
    name: 'Home',
   component: () => import('../components/layout/basepage.vue'),
    //component: () => import('../views/auth/home.vue'),

    meta: {
      invisible: true,
      authority: "admin"
    },

    children: [
      
      {
      path: 'homedash',
      name: 'homedash',
      meta: {
        authority: "admin"
      },
      component:() => import('../views/auth/home.vue'),

    //   children: [
    //     {
    //       path:"everyonehome",
    //       name:"EveryUserHome",
    //       meta: {
    //         authority: "admin",
    //       },
    //       component: () => import('../views/auth/copyauthpage.vue')

    //      }
    // ],
    },
    
    {
      path: 'depadmin',
      name: 'DepAdmin',
      meta: {
        authority: "admin",
        
      },
      component: () => import('../components/layout/basepage.vue'),

      //component:() => import('../views/auth/copyauthpage.vue')

      children: [
        {
          path:"adddepuser",
          name:"AddDepUser",
          meta: {
            authority: "admin",
          },
          component: () => import('../views/auth/adminuserops.vue')

         },
        {
          path:"approveedit",
          name:"AproveEdits",
          meta: {
            authority: "admin",
          },
          component: () => import('../views/auth/admineditapprove.vue')

         },
         {
          path:"approvenew",
          name:"AproveNew",
          meta: {
            authority: "admin",
          },
          component: () => import('../views/auth/adminnewapprove.vue')

         }
    ],
    },

    {
      path: 'depuser',
      name: 'DepUser',
      meta: {
        authority: "admin",
        
      },
      component: () => import('../components/layout/basepage.vue'),

      //component:() => import('../views/auth/copyauthpage.vue')

      children: [
        {
          path:"depuserlive",
          name:"DepUserLive",
          meta: {
            authority: "admin",
          },
          component: () => import('../views/auth/depuserlive.vue')

         },
         {
          path:"depuseredits",
          name:"DepUserEdits",
          meta: {
            authority: "admin",
          },
          component: () => import('../views/auth/depuseredits.vue')

         },
         {
          path:"depusernew",
          name:"DepUserNew",
          meta: {
            authority: "admin",
          },
          component: () => import('../views/auth/depusernew.vue')

         },
         {
          path:"depusercreate",
          name:"DepUserCreate",
          meta: {
            authority: "admin",
          },
          component: () => import('../views/auth/depusercreate.vue')

         },

    ],
    },
    {
      path: 'homeprofile',
      name: 'Homeprofile',
      meta: {
        invisible: true,
        authority: "admin",
        
      },
      component: () => import('../components/layout/basepage.vue'),

      //component:() => import('../views/auth/copyauthpage.vue')

      children: [
        {
          path:"recover",
          name:"Recover",
          meta: {
            authority: "admin",
          },
          component: () => import('../views/auth/profilerecover.vue')

         },
         {
          path:"request",
          name:"Request",
          meta: {
            authority: "admin",
          },
          component: () => import('../views/auth/profilerequest.vue')

         },
         {
          path:"logout",
          name:"Logout",
          meta: {
            authority: "admin",
          },
          component: () => import('../views/auth/copyauthpage.vue')

         },

    ],
    },
  ]
  },

    {
    path: '/login',
    name: 'login',
    component: () => import('../views/noauth/login.vue')
  },

  ]
}
function initRouter() {
 // const options = isAsync ? require('./async/config.async').default : require('./config').default
 // const options = Loc_options
  formatRoutes(Loc_options.routes)
  return new Router(Loc_options)
}

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })

export { initRouter, loginIgnore}