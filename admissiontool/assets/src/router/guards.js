import {hasAuthority} from '@/utils/authority-utils'
import {loginIgnore} from '@/router/index'
import {checkAuthorization} from '@/utils/request'
import NProgress from 'nprogress'

NProgress.configure({ showSpinner: false })

/**
 * 
 * @param to
 * @param form
 * @param next
 */
const progressStart = (to, from, next) => {
  // start progress bar
  if (!NProgress.isStarted()) {
    NProgress.start()
  }
  next()
}

/**
 * 
 * @param to
 * @param form
 * @param next
 * @param options
 */
const loginGuard = (to, from, next, options) => {
 const {message} = options
  if (!loginIgnore.includes(to) && !checkAuthorization()) {
    //message.warning('Expired Login ')
    console.log(message)
    console.log("login expired")
    next({path: '/login'})
  } else {
    next()
  }
}

/**
 * 
 * @param to
 * @param form
 * @param next
 * @param options
 */
const authorityGuard = (to, from, next, options) => {
  const {store, message} = options
  const permissions = store.getters['account/permissions']
  const roles = store.getters['account/roles']
  console.log("roles in authority guared", roles)
  console.log("permissions in authority guard", permissions)
  if (!hasAuthority(to, permissions, roles)) {
    console.log("doing this")
    message.warning(`Permission to page ${to.fullPath}，not granted`)
    next({path: '/403'})
    // NProgress.done()
  } else {
    console.log("not doing this")
    next()
  }
}

/**
 * 
 * @param to
 * @param from
 * @param next
 * @param options
 * @returns {*}
 */
const redirectGuard = (to, from, next, options) => {
  const {store} = options
  const getFirstChild = (routes) => {
    const route = routes[0]
    if (!route.children || route.children.length === 0) {
      return route
    }
    return getFirstChild(route.children)
  }
  //store.state.setting.layout = "none"
  if (store.state.setting.layout === 'mix') {
    const firstMenu = store.getters['setting/firstMenu']
    if (firstMenu.find(item => item.fullPath === to.fullPath)) {
      store.commit('setting/setActivatedFirst', to.fullPath)
      const subMenu = store.getters['setting/subMenu']
      if (subMenu.length > 0) {
        const redirect = getFirstChild(subMenu)
        return next({path: redirect.fullPath})
      }
    }
  }
  next()
}

/**
 * 
 * @param to
 * @param form
 * @param options
 */
const progressDone = () => {
  // finish progress bar
  NProgress.done()
}

export default {
  beforeEach: [progressStart, loginGuard, authorityGuard, redirectGuard],
  afterEach: [progressDone]
}
