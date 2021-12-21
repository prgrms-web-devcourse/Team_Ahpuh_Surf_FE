import request from '../api'

const updateUser = (payload) => request.put(`/users`, payload)

export default updateUser
