import request from '../api'

const deleteCategory = (categoryId, payload) =>
  request.delete(`/categories/${categoryId}`, payload)

export default deleteCategory
