import useSWR from 'swr'
import fetcher from 'utils/apis/fetcher'

const useGetFollowingList = (userId) => {
  const { data = {}, error } = useSWR(`/users/${userId}/following`, fetcher)
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  }
}

export default useGetFollowingList
