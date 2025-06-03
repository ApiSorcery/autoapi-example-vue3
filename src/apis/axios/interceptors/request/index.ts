import type { AxiosRequestConfig } from 'axios'

const removeEmptyProperty = function (obj: Record<string, any> | null | undefined): Record<string, any> {
  if (obj === null || obj === undefined) {
    return {};
  } else {
    for (const prop in obj) {
      if (obj[prop] === '' || obj[prop] === undefined || obj[prop] === null) {
        delete obj[prop];
      }
    }
  }

  return obj;
}

export default {
  onFulfilled: (config: AxiosRequestConfig) => {
    if (!config.headers) {
      config.headers = {}
    }

    if (config.method === 'get') {
      // 清除空参数
      config.params = { ...removeEmptyProperty(config.params) }
      // 给 get 请求加上时间戳参数，避免从缓存中拿数据。
      config.params = Object.assign(config.params || {}, { _t: new Date().getTime() })
    }

    return config
  },
  onRejected: (error: any) => {
    console.log('request interceptor onRejected', error)
    return Promise.reject(error)
  }
}
