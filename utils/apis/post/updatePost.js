import request from '../api'

const updatePost = (postId, payload) => request.put(`/posts/${postId}`, payload)

export default updatePost
