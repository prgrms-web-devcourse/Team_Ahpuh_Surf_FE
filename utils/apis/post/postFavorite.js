import request from '../api'

const postFavorite = (postId) => request.post(`/posts/${postId}/favorite`, {})

export default postFavorite
