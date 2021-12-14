import useSWR from 'swr'
import fetcher from 'utils/apis/fetcher'

const useUser = (userId) => {
  const { data, error } = useSWR(`users/${userId}`, fetcher)
  // const { data } = axios.get(`${API_END_POINT}/users/${userId}`)
  console.log(data)

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  }
}

export default useUser
