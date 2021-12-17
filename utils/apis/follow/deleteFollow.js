import request from '../api'

const deleteFollow = (followId) => request.delete(`/posts/${followId}`)

export default deleteFollow
