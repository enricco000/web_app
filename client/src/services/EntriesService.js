import Api from '@/services/Api'

export default {
  index () {
    return Api().get('/entries')
  },
  post (entry) {
    return Api().post('/entries', entry)
  },
  show (postId) {
    return Api().get(`/entries/${postId}`)
  }
}
