import useSWR from 'swr'
import fetcher from 'utils/apis/fetcher'
import { useGetCategoriesPath } from 'constants/apiPath'

const useGetCategories = (options = {}) => {
  const { data = [], error } = useSWR(useGetCategoriesPath, fetcher, options)

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  }
}

export default useGetCategories
