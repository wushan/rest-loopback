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
  signOut (cb) {
    var cred = Store.get('access')
    superagent
    .post('/api/users/logout')
    .query({access_token: cred.id})
    .end(function (err, res) {
      if (err) {
        cb(err.response.body.error.message)
      } else {
        Store.remove('access')
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
  addNews (title, content, file, cb) {
    var cred = Store.get('access')
    var containerUrl = '/api/containers/news/'
    superagent
      .post('/api/news/create')
      .query({access_token: cred.id})
      .send({title})
      .send({content})
      .attach(file[0])
      // .send({media: containerUrl + '/download/' + res.body.result.files.file[0].name})
      .end(function (err, res) {
        if (err) {
          cb(err.response.body.error.message)
        } else {
          cb(null, res.body)
        }
      })
    // //Get File Url First
    // superagent
    // .post(containerUrl + '/upload')
    // .query({access_token: cred.id})
    // .attach('file', file[0])
    // .end(function (err, res) {
    //   if (err) {
    //     cb(err.response.body.error.message)
    //   } else {
    //     console.log(res.body)
    //     superagent
    //     .post('/api/news/create')
    //     .query({access_token: cred.id})
    //     .send({title})
    //     .send({content})
    //     .send({media: containerUrl + '/download/' + res.body.result.files.file[0].name})
    //     .end(function (err, res) {
    //       if (err) {
    //         cb(err.response.body.error.message)
    //       } else {
    //         cb(null, res.body)
    //       }
    //     })
    //   }
    // })
  }
}