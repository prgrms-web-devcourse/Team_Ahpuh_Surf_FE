import axios from 'axios'
import { API_END_POINT } from 'constants/environment'

const fetcher = (url) =>
  axios.get(`${API_END_POINT}/${url}`).then((response) => response.data)

export default fetcher
