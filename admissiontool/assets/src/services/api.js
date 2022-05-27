// const API_PROXY_PREFIX='/api'
// const BASE_URL = process.env.NODE_ENV === 'production' ? process.env.VUE_APP_API_BASE_URL : API_PROXY_PREFIX
//const BASE_URL = process.env.VUE_APP_API_BASE_URL
//const LOGIN_BASE = process.env.VUE_APP_API_LOGIN_BASE


// //const BASE_URL = ``
// const LOGIN_BASE = `http://localhost:3000/auth`



// const BASE_URL = `http://localhost:10010/api`
// const LOGIN_BASE =`http://localhost:3000/auth`
//IMG_BASE = `http://127.0.0.1:10012/files/img?path=`

// const MODERATORWORKERID = "PX4EeEndXPUiKqXQ59n4Lm"
// const MODERATORMANAGERID = "iPwbPdD4KEznHdppmzL2TV"
// const BUYERID = "dEqLm3pKhyKoznyuzVPcgE"
// const SELLERID = "jH54rbKmeuuoMfLZWb79KK"

const BASE_URL = `http://localhost:8000/api`
const LOGIN_BASE =`https://auth.dealstagingapplication.ga/auth`
const IMG_BASE = `https://files.dealstagingapplication.ga/files/img?path=`



module.exports = {
  IMG_BASE,

  LOGIN: `${LOGIN_BASE}/login`,
  VERIFY: `${BASE_URL}/verify`,
  REGISTER:`${LOGIN_BASE}/register`,
  LOGOUT : `${LOGIN_BASE}/logout`,

  //ROUTES: `${BASE_URL}/routes`,
  
  USER_INFO: `${BASE_URL}/auth/account/client/get-info`,
  LOCALSIGNUP: `${BASE_URL}/auth/account/client/signup`,
  
}
