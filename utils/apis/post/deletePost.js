import request from '../api'

const deletePost = (postId) => request.delete(`/posts/${postId}`)

export default deletePost
