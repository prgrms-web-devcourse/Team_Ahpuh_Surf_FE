import interceptor from 'utils/apis/interceptor'

const updatePost = async (postId) => {
  // 응답 값 없음
  const { data = false } = await interceptor.delete(`/posts/${postId}`)

  return data
}

export default updatePost
