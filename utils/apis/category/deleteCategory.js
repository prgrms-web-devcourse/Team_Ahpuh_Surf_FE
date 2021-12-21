import request from '../api'

const deleteCategory = (categoryId) =>
  request.delete(`/categories/${categoryId}`)

export default deleteCategory
