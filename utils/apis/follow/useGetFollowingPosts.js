import useSWR from 'swr'
import fetcher from 'utils/apis/fetcher'

const useGetFollowingPosts = (cursorId) => {
  const { data = {}, error } = useSWR(
    `/follow/posts?cursorId=${cursorId}`,
    fetcher,
  )
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  }
}

export default useGetFollowingPosts
