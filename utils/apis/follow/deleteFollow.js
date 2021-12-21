import request from '../api'

const deleteFollow = (userId) => request.delete(`/follow/${userId}`)

export default deleteFollow
