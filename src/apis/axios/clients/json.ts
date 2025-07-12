import axios from 'axios'
import requestInterceptor from '../interceptors/request'
import responseInterceptor from '../interceptors/response'

// 创建 axios 实例   withCredentials: true,
const requestClient = axios.create({
  baseURL: import.meta.env.VITE_GLOB_BASE_API,
  timeout: 60000,
  responseType: 'json',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
})

requestClient.interceptors.request.use(
  requestInterceptor.onFulfilled,
  requestInterceptor.onRejected,
)
requestClient.interceptors.response.use(
  responseInterceptor.onFulfilled,
  responseInterceptor.onRejected,
)

export default requestClient
