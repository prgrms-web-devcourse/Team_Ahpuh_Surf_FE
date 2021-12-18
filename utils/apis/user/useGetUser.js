import useSWR from 'swr'
import fetcher from 'utils/apis/fetcher'

const useUser = (userId) => {
  const { data, error } = useSWR(userId ? `/users/${userId}` : null, fetcher)


  return {
    data,
    isLoading: !error && !data,
    isError: error,
  }
}

export default useGetUser
