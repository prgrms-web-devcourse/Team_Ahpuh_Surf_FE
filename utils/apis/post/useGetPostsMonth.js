import useSWR from 'swr'
import fetcher from 'utils/apis/fetcher'

const useGetPostsMonth = (year, month) => {
  const { data, error } = useSWR(
    `/posts/month?year=${year}&month=${month}`,
    fetcher,
  )

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  }
}

export default useGetPostsMonth
