import useSWR from 'swr'
import fetcher from 'utils/apis/fetcher'

const useGetRecentPosts = (options) => {
  const { data, mutate, error } = useSWR(`/posts/recent`, fetcher, options)

  return {
    data,
    mutate,
    isLoading: !error && !data,
    isError: error,
  }
}

export default useGetRecentPosts
