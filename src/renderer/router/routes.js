import Login from 'views/Login/login.vue'

export default [
  {
    path: '/',
    name: 'Login',
    component: Login,
    meta: {
      keepAlive: true // keepAlive will allow the page to load only once
    }
  }
]
