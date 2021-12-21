import useSWR from 'swr'
import fetcher from 'utils/apis/fetcher'

const useGetYearScore = (userId, options) => {
  const { data, error } = useSWR(
    `/posts/score?userId=${userId}`,
    fetcher,
    options,
  )

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  }
}

export default useGetYearScore
