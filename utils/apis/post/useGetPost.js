import useSWR from 'swr'
import fetcher from 'utils/apis/fetcher'

const useGetPost = (postId) => {
  const { data = {}, error } = useSWR(`/posts/${postId}`, fetcher)
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  }
}

export default useGetPost
