import request from '../api'

// const deleteUser = (userId) => request.delete(`/users/${userId}`)
const deleteUser = () => request.delete(`/users`)

export default deleteUser
