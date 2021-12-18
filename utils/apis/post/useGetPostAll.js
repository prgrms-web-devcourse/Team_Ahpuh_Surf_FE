import useSWR from 'swr'
import fetcher from 'utils/apis/fetcher'

const useGetPost = (userId, cursorId) => {
  const { data = {}, error } = useSWR(
    `/posts/all?userId=${userId}&cursorId=${cursorId}`,
    fetcher,
  )
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  }
}

export default useGetPost
