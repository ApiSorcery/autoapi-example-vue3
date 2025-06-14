import type { AxiosRequestConfig } from 'axios'
import type { BlobResp } from './model'
import jsonRequest from '../../axios/clients/json'
import blobRequest from '../../axios/clients/blob'

export const createJsonRequest = <TReq, TResp = any>(requestConfigCreator: (args: TReq) => AxiosRequestConfig) => {
  return (args: TReq) => <Promise<TResp>>jsonRequest(requestConfigCreator(args))
}

export const createNoParamsJsonRequest = <TResp = any>(requestConfigCreator: () => AxiosRequestConfig) => {
  return () => <Promise<TResp>>jsonRequest(requestConfigCreator())
}

export const createBlobRequest = <TReq>(requestConfigCreator: (args: TReq) => AxiosRequestConfig) => {
  return (args: TReq) => blobRequest(requestConfigCreator(args)) as unknown as Promise<BlobResp>
}

export const createNoParamsBlobRequest = (requestConfigCreator: () => AxiosRequestConfig) => {
  return () => blobRequest(requestConfigCreator()) as unknown as Promise<BlobResp>
}
