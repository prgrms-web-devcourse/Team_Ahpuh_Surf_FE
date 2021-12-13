import useSWR from 'swr'
import fetcher from 'utils/apis/fetcher'

const useGetDashboard = (userId) => {
  const { data, error } = useSWR(
    `/categories/dashboard?userId=${userId}`,
    fetcher,
  )

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  }
}

export default useGetDashboard
