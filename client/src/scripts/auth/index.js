// src/auth/index.js

import {router} from '../../main'
import superagent from 'superagent'

// URL and endpoint constants
const API_URL = 'http://localhost:3001/'
const LOGIN_URL = API_URL + 'sessions/create/'
const SIGNUP_URL = API_URL + 'users/'

export default {

  // User object will let us check authentication status
  user: {
    authenticated: false
  },

  // Send a request to the login URL and save the returned JWT
  signIn (email, password, redirect) {
    superagent
    .post('/api/users/login')
    .send({email: email, password: password})
    .end(function (err, res) {
      if (err) {
        this.error = err.response.body.error.message
      } else {
        console.log(res.body.id)
        localStorage.setItem('id_token', res.body.id)
        // this.user.authenticated = true
        console.log(this)
        if(redirect) {
          this.$router.push(redirect)       
        }
      }
    })
  },
  signup(context, creds, redirect) {
    context.$http.post(SIGNUP_URL, creds, (data) => {
      localStorage.setItem('id_token', data.id_token)

      this.user.authenticated = true

      if(redirect) {
        router.go(redirect)        
      }

    }).error((err) => {
      context.error = err
    })
  },

  // To log out, we just need to remove the token
  logout() {
    localStorage.removeItem('id_token')
    this.user.authenticated = false
  },

  checkAuth() {
    var jwt = localStorage.getItem('id_token')
    if(jwt) {
      this.user.authenticated = true
    }
    else {
      this.user.authenticated = false      
    }
  },

  // The object to be passed as a header for authenticated requests
  getAuthHeader() {
    return {
      'Authorization': 'Bearer ' + localStorage.getItem('id_token')
    }
  }
}