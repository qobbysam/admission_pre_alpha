/**
 * 
 * @param authority 
 * @param permissions 
 * @returns {boolean|*}
 */
 function hasPermission(authority, permissions) {
    let required = '*'
    if (typeof authority === 'string') {
      required = authority
    } else if (typeof authority === 'object') {
      required = authority.permission
    }
    return required === '*' || (permissions && permissions.findIndex(item => item === required || item.id === required) !== -1)
  }
  
  /**
   * 
   * @param authority 
   * @param roles 
   */
  function hasRole(authority, roles) {
    let required = undefined
    if (typeof authority === 'object') {
      required = authority.role
    }
    return authority === '*' || hasAnyRole(required, roles)
  }
  
  /**
   *
   * @param required {String | Array[String]} 
   * @param roles 
   * @returns {boolean}
   */
  function hasAnyRole(required, roles) {
    if (!required) {
      return false
    } else if(Array.isArray(required)) {
      return roles.findIndex(role => {
        return required.findIndex(item => item === role || item === role.id) !== -1
      }) !== -1
    } else {
      return roles.findIndex(role => role === required || role.id === required) !== -1
    }
  }
  
  /**
   * 
   * @param route 
   * @param permissions
   * @param roles 
   * @returns {boolean}
   */
  function hasAuthority(route, permissions, roles) {
    console.log("Permissions in hasauth", permissions)
    console.log("roles in hasauth", roles)
    console.log("route her", route)
    const authorities = [...route.meta.pAuthorities, route.meta.authority]
    //const authorities = [route.meta.authority]
    for (let authority of authorities) {
      console.log("auth in hasauth for ", authority)
      console.log("permission in hasuth for", permissions)
      console.log("role in hasauth for", roles)
      if (!hasPermission(authority, permissions) && !hasRole(authority, roles)) {
        console.log("finish authority with false")
        return false
      }
    }
    console.log("finish authority with true")
    return true
  }
  
  /**
   * 
   * @param menuData
   * @param permissions
   * @param roles
   */
  function filterMenu(menuData, permissions, roles) {
    return menuData.filter(menu => {
      if (menu.meta && menu.meta.invisible === undefined) {
        if (!hasAuthority(menu, permissions, roles)) {
          return false
        }
      }
      if (menu.children && menu.children.length > 0) {
        menu.children = filterMenu(menu.children, permissions, roles)
      }
      return true
    })
  }
  
  export {filterMenu, hasAuthority}
  