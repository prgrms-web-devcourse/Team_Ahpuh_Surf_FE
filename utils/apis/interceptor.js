import axios from 'axios'
import { API_END_POINT } from 'constants/environment'
import Cookies from 'js-cookie'

export const API = () => {
  const instance = axios.create({
    baseURL: API_END_POINT,
    withCredentials: true,
    timeout: 1000,
  })

  instance.interceptors.request.use(
    (config) => {
      const API_TOKEN = JSON.parse(Cookies.get('user'))?.token
      config.headers['Content-Type'] = 'application/json; charset=utf-8'
      config.headers.Authorization = API_TOKEN
      return config
    },
    (error) => {
      console.error(error)
      return Promise.reject(error)
    },
  )

  return instance
}
