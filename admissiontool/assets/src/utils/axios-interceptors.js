import Cookie from 'js-cookie'
// 401
const resp401 = {
  /**
   * 
   * @param response 
   * @param options  {router, i18n, store, message}
   * @returns {*}
   */
  onFulfilled(response, options) {
    const {message} = options
    if (response.code === 401) {
      message.error('403 response received on fulfilled resp401')
    }
    return response
  },
  /**
   * 
   * @param error
   * @param options : {router, i18n, store, message}
   * @returns {Promise<never>}
   */
  onRejected(error, options) {
    const {message} = options
    const {response} = error
    if (response.status === 401) {
      message.error('403 response received on onrejected resp403')
    }
    return Promise.reject(error)
  }
}

const resp403 = {
  onFulfilled(response, options) {
    const {message} = options
    if (response.code === 403) {
      message.error('403 response received on on fulfilled resp403')
    }
    return response
  },
  onRejected(error, options) {
    const {message} = options
    const {response} = error
    if (response.status === 403) {
      message.error('403 response received onrejected resp403')
    }
    return Promise.reject(error)
  }
}
const resp307 = {
  /**
   * 
   * @param config axios config
   * @param options : {router, i18n, store, message}
   * @returns {*}
   */
   onFulfilled(response, options) {
    console.log("doing interception ://")
    const {message} = options
    // const {url, xsrfCookieName} = config
    if (response.status === 307) {
     // message.error('403 response received on onrejected resp403')

     console.log("doing interception :2")
     message.warning('307')
     return response
    }

    
    // if (url.indexOf('login') === -1 && xsrfCookieName && !Cookie.get(xsrfCookieName)) {
    //   message.warning('login again token is missing')
    // }
    return response
  },

  onRejected(error, options) {
    const {message} = options
    const {response} = error
    if (response.status === 307) {
      console.log("doing interception :2")
      message.error('403 response received onrejected 307')
    }
    return Promise.reject(error)
  }

  

}

const reqCommon = {
  /**
   * 
   * @param config axios config
   * @param options  {router, i18n, store, message}
   * @returns {*}
   */
  onFulfilled(config, options) {
    const {message} = options
    const {url, xsrfCookieName} = config
    if (url.indexOf('login') === -1 && xsrfCookieName && !Cookie.get(xsrfCookieName)) {
      message.warning('pass request')
    }
    return config
  },
  /**
   * 
   * @param error 
   * @param options : {router, i18n, store, message}
   * @returns {Promise<never>}
   */
  onRejected(error, options) {
    const {message} = options
    message.error(error.message)
    return Promise.reject(error)
  }
}

export default {
  request: [reqCommon], // 
  response: [resp401, resp403, resp307] // 
}

