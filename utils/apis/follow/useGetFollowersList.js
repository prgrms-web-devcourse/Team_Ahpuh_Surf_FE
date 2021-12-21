import useSWR from 'swr'
import fetcher from 'utils/apis/fetcher'

const useGetFollowersList = (userId) => {
  const { data = {}, error } = useSWR(`/users/${userId}/followers`, fetcher)
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  }
}

export default useGetFollowersList
