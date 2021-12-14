import axios from 'axios'
import Cookies from 'js-cookie'
import { API_END_POINT } from 'constants/environment'

const API = () => {
  const instance = axios.create({
    baseURL: API_END_POINT,
    withCredentials: true,
    timeout: 1000,
  })

  instance.interceptors.request.use(
    (config) => {
      const API_TOKEN =
        Cookies.get('user') && JSON.parse(Cookies.get('user'))?.token
      config.headers['Content-Type'] = 'application/json; charset=utf-8'
      config.headers.Authorization = `bearer ${API_TOKEN}`
      return config
    },
    (error) => {
      console.error(error, 'setInterceptor')
      return Promise.reject(error)
    },
  )

  return instance
}

const request = API()
export default request
