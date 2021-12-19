import useSWR from 'swr'
import fetcher from 'utils/apis/fetcher'

const useGetPostsCountYear = (year, userId, options) => {
  const { data, error } = useSWR(
    year && userId
      ? `/posts/calendarGraph?year=${year}&userId=${userId}`
      : null,
    fetcher,
    options,
  )

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  }
}

export default useGetPostsCountYear
