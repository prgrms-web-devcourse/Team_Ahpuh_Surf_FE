import { uploadPostPath } from 'constants/apiPath'
import request from '../api'

const uploadPost = (payload) => request.post(uploadPostPath, payload)

export default uploadPost
