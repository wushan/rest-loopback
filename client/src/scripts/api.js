import superagent from 'superagent'
export default {
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
  }
}