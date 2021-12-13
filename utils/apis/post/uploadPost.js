import request from '../api'

const uploadPost = (payload) => request.post(`/posts`, payload)

export default uploadPost
