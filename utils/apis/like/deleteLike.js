import request from '../api'

const deleteLike = (postId, likeId) =>
  request.delete(`/posts/${postId}/unlike/${likeId}`)

export default deleteLike
