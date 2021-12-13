import useSWR from 'swr'
import fetcher from 'utils/apis/fetcher'

const useGetCategories = () => {
  const { data, error } = useSWR('/categories', fetcher)

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  }
}

export default useGetCategories
