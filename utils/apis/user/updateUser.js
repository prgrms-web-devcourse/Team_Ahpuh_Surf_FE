import interceptor from 'utils/apis/interceptor'

const updateUser = async (userId, payload) => {
  const { data } = await interceptor.put(`/users/${userId}`, payload)

  return data
}

export default updateUser
