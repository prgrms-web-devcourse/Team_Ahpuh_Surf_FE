import request from '../api'

const deleteFavorite = (postId) => request.delete(`/posts/${postId}/favorite`)

export default deleteFavorite
