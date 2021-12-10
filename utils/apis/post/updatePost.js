import interceptor from 'utils/apis/interceptor'

const updatePost = async (postId, payload) => {
  const { data } = await interceptor.put(`/posts/${postId}`, payload)

  return data
}

export default updatePost
