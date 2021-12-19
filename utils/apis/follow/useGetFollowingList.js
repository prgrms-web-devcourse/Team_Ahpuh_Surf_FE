import useSWR from 'swr'
import fetcher from 'utils/apis/fetcher'

const useGetFollowingList = (userId) => {
  const { data = {}, error } = useSWR(
    userId ? `/users/${userId}/following` : null,
    fetcher,
  )
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  }
}

export default useGetFollowingList
