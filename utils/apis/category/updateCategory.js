import request from '../api'

const updateCategory = (categoryId, payload) =>
  request.put(`/categories/${categoryId}`, payload)

export default updateCategory
