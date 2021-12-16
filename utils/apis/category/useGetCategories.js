import useSWR from 'swr'
import fetcher from 'utils/apis/fetcher'

const useGetCategories = (options = {}) => {
  const { data = [], error } = useSWR('/categories', fetcher, options)

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  }
}

export default useGetCategories
