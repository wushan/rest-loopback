import superagent from 'superagent'
import Store from './vendor/store'
export default {
  checkAuth (access, cb) {
    console.log(access)
    superagent
    .get('/api/users/' + access.userId + '/exists')
    .query({access_token: access.id})
    // .set('access_token', access.id)
    .end(function (err, res) {
      if (err) {
        cb(err.response.body.error.message)
      } else {
        cb(null, res.body)
      }
    })
  },
  signUp (email, password, cb) {
    superagent
    .post('/api/users')
    .send({email: email, password: password})
    .end(function (err, res) {
      if (err) {
        cb(err.response.body.error.message)
      } else {
        cb(null, res.body)
      }
    })
  },
  signIn (email, password, cb) {
    superagent
    .post('/api/users/login')
    .send({email: email, password: password})
    .end(function (err, res) {
      if (err) {
        cb(err.response.body.error.message)
      } else {
        Store.set('access', res.body)
        cb(null, res.body)
      }
    })
  },
  signOut (token, cb) {
    superagent
    .post('/api/users/logout')
    .query({access_token: token})
    .end(function (err, res) {
      if (err) {
        cb(err.response.body.error.message)
      } else {
        cb(null, res.body)
      }
    })
  },
  // News
  getNews (cb) {
    superagent
    .get('/api/news')
    .end(function (err, res) {
      if (err) {
        cb(err.response.body.error.message)
      } else {
        cb(null, res.body)
      }
    })
  },
  addNews (title, content, cb) {
    var cred = Store.get('access')
    superagent
    .post('/api/news/create')
    .query({access_token: cred.id})
    .send({title})
    .send({content})
    .end(function (err, res) {
      if (err) {
        cb(err.response.body.error.message)
      } else {
        cb(null, res.body)
      }
    })
  }
}