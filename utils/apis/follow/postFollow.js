import request from '../api'

const postFollow = (userId) => request.post(`/follow`, userId)

export default postFollow
