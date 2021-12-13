import request from '../api'

const login = (payload) => request.post('/users/login', payload)

export default login
