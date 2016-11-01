import superagent from 'superagent'
export default {
  checkAuth (token, cb) {
    console.log(token)
    superagent
    .get('/api/users/findOne')
    .set('access_token', token)
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
  addNews (title, content, cb) {
    superagent
    .post('/api/news')
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