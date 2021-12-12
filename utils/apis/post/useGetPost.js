import useSWR from 'swr'
import fetcher from 'utils/apis/fetcher'

const useUser = (postId) => {
  const { data, error } = useSWR(`/posts/${postId}`, fetcher)

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  }
}

export default useUser
