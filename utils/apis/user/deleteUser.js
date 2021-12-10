import interceptor from 'utils/apis/interceptor'

const deleteUser = async (userId) => {
  const { data = false } = await interceptor.delete(`/users/${userId}`)

  return data
}

export default deleteUser
