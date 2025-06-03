import type { AxiosResponse } from 'axios'
import type { BlobResp, Result } from '../../axios'

export default {
  onFulfilled: async (res: AxiosResponse<Result>) => {
    if (res.data.status === 0) {
      return res.data.data
    }

    // 返回blob格式，文件下载
    if (res.data instanceof Blob) {
      return <BlobResp>{
        data: res.data,
        type: res.headers['content-type'],
        name: decodeURIComponent(
          res.headers['content-disposition'].substring(
            res.headers['content-disposition'].indexOf('=') + 1
          )
        )
      }
    }

    let dataErrMsg = res.data.message || '请求出错，请稍侯再试...'
    return Promise.reject(new Error(dataErrMsg))

  },
  onRejected: async (error: any) => {
    let errMsg =
      error.message || (error.response && error.response.data.message) || '网络开小差了...'
    if (errMsg.indexOf('timeout') > -1) {
      errMsg = '请求超时，请稍侯再试...'
    }
    return Promise.reject(error)
  }
}
