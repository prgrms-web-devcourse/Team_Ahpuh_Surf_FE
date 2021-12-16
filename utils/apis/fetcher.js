import axios from 'axios'
import { API_END_POINT, LOGIN_COOKIE } from 'constants/environment'
import Cookies from 'js-cookie'

const fetcher = (url) =>
  axios
    .get(`${API_END_POINT}${url}`, {
      withCredentials: true,
      headers: {
        token: `${JSON.parse(Cookies.get(LOGIN_COOKIE))?.token}`
      },
    })
    .then((response) => response.data)

export default fetcher
