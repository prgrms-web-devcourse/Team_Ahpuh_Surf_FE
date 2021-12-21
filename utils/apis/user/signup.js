import request from '../api'

const signup = (payload) => request.post('/users', payload)

export default signup
