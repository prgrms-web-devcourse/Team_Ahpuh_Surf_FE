import useSWR from 'swr'
import fetcher from 'utils/apis/fetcher'

const useGetPost = (userId, cursorId, options) => {
  const { data = {}, error } = useSWR(
    `/posts/all?userId=${userId}&cursorId=${cursorId}`,
    fetcher,
    options,
  )
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  }
}

export default useGetPost
