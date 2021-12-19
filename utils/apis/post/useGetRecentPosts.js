import useSWR from 'swr'
import fetcher from 'utils/apis/fetcher'

const useGetRecentPosts = (cursorId, options) => {
  const { data, mutate, error } = useSWR(
    `/posts/recent?cursorId=${cursorId}`,
    fetcher,
    options,
  )

  return {
    data: data?.values,
    mutate,
    isLoading: !error && !data,
    isError: error,
  }
}

export default useGetRecentPosts
