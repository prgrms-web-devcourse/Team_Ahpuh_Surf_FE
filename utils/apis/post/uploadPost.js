import interceptor from 'utils/apis/interceptor'

const uploadPost = async (payload) => {
  const { data } = await interceptor.post(`/posts`, payload)

  return data
}

export default uploadPost
