import useSWR from 'swr'
import fetcher from 'utils/apis/fetcher'

const useGetPostsCountYear = (year, userId) => {
  const { data, error } = useSWR(
    `/posts/calendarGraph?year=${year}&userId=${userId}`,
    fetcher,
  )

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  }
}

export default useGetPostsCountYear
