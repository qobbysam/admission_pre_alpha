
import {request, METHOD, } from '@/utils/request'

import  {VERIFY}  from './api'
export async function getVerifyInfo() {
    console.log("async get info called")
      return request(VERIFY, METHOD.GET, {

      }) 
    }