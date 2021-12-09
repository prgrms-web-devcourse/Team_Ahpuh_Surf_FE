import interceptor from 'utils/apis/interceptor'

const login = async (payload) => {
  const { data } = await interceptor.post('/users/login', payload)

  return data
}

export default login
