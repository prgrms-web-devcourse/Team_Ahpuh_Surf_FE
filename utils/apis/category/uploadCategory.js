import request from '../api'

const uploadCategory = (payload) => request.post(`/categories`, payload)

export default uploadCategory
