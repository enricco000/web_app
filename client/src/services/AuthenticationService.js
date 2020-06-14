import Api from '@/services/Api'

export default {
  register (credentials) {
    return Api().post('/register', credentials)
  },
  login (credentials) {
    return Api().post('/login', credentials)
  },
  user (params) {
    return Api().get('user', {
    params: params
    })
  }
}
