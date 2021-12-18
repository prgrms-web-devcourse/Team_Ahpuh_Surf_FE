import request from '../api'

const deleteFollow = (userId) => request.delete(`/posts/${userId}`)

export default deleteFollow
