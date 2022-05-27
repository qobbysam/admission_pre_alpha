/**
 * 
 * @param keys key， keys = ['config', 'path'] ,  object.config.path 
 * @param value 
 * @returns {Object}
 */
Object.defineProperty(Object.prototype, 'assignProps', {
  writable: false,
  enumerable: false,
  configurable: true,
  value: function (keys, value) {
    let props = this
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i]
      if (i == keys.length - 1) {
        props[key] = value
      } else {
        props[key] = props[key] == undefined ? {} : props[key]
        props = props[key]
      }
    }
    return this
  }
})
