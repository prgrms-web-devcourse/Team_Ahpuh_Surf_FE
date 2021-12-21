import useSWR from 'swr'
import fetcher from 'utils/apis/fetcher'

const useGetPost = (postId) => {
  const { data = {}, error } = useSWR(
    postId ? `/posts/${postId}` : null,
    fetcher,
  )
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  }
}

export default useGetPost
