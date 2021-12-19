import useSWR from 'swr'
import fetcher from 'utils/apis/fetcher'

const useGetPostsCategory = (userId, categoryId, cursorId) => {
  const { data, error } = useSWR(`/posts?userId=${userId}&categoryId=${categoryId}&cursorId=${cursorId}`,
    fetcher,
  )

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  }
}

export default useGetPostsCategory