import axios from 'axios'

const instance = axios.create({
  baseURL : 'http://14.32.136.156:7410/insta/restapi'
})
export default instance;