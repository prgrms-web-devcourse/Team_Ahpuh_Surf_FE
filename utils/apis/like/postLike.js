import request from '../api'

const postLike = (postId) => request.post(`/posts/${postId}/like`, {})

export default postLike
