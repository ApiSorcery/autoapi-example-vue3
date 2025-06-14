/// 服务管理
import * as base from './base';
import * as Model from './model';

/**
 * 新增服务
 */
  export const addServer = base.createJsonRequest<Model.ServerAddRequestDto,number>((data) => ({
      url: `/server`,
      method: 'POST',
      data
  }))

/**
 * 获取服务详情
 */
  export const getServerInfo = base.createJsonRequest<Model.GetServerInfoRequest,Model.ServerResponseDto>((req) => ({
      url: `/server/${req.id}`,
      method: 'GET',
  }))

  /// 获取应用列表（所有）
  export const getServerList = base.createNoParamsJsonRequest<Array<Model.ServerResponseDto>>(() => ({
      url: `/server/list`,
      method: 'GET'
  }))

/**
 * 获取服务列表（分页）
 */
  export const getServerPaged = base.createJsonRequest<Model.ServerQueryRequestDto,Model.GetServerPagedResponse>((data) => ({
      url: `/server/paged`,
      method: 'POST',
      data
  }))

/**
 * 修改服务
 */
  export const modifyServer = base.createJsonRequest<Model.ServerEditRequestDto>((data) => ({
      url: `/server`,
      method: 'PATCH',
      data
  }))

/**
 * 删除服务
 */
  export const removeServer = base.createJsonRequest<Model.RemoveServerRequest>((req) => ({
      url: `/server/${req.id}`,
      method: 'DELETE',
  }))
