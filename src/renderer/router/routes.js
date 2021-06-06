import Login from 'views/Login/login.vue'
import Main from 'views/Main/index.vue'

export default [{
    path: '/',
    name: 'Login',
    component: Login,
    meta: {
        keepAlive: true // keepAlive will allow the page to load only once
    }
}, {
    path: '/main',
    name: 'main',
    component: Main,
    meta: {
        keepAlive: true // keepAlive will allow the page to load only once
    }
}]