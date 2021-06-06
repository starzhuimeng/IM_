import axios from 'axios'
const {get, post } = axios

// 真实接口
// axios.defaults.baseURL = 'https://api.starzhuimeng.cn/api';
// 模拟接口
axios.defaults.baseURL = 'http://localhost:8099/api';

export default {
    user_login: async(params) => await post("/user/login", {...params }, {}),
    user_info: async(params) => await get("/user/login", params)
}