import axios from 'axios'
const { get, post } = axios


axios.defaults.baseURL = 'https://api.starzhuimeng.cn';

export default {
  user_login: async (params) => {await post("/user/login",params,{})},
  user_info: async (params) => {await get("/user/login",params)}
}