import request from '../api'

const postFollow = (userId) =>
  request.post(`/follow`, {
    followUserId: userId,
  })

export default postFollow
