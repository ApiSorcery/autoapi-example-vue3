/// 应用管理
import * as base from './base';
import * as Model from './model';

/**
 * 新增应用
 */
  export const addApplication = base.createJsonRequest<Model.ApplicationAddRequestDto,number>((data) => ({
      url: `/application`,
      method: 'POST',
      data
  }))

/**
 * 获取应用详情
 */
  export const getApplicationInfo = base.createJsonRequest<Model.GetApplicationInfoRequest,Model.ApplicationResponseDto>((req) => ({
      url: `/application/${req.id}`,
      method: 'GET',
  }))

  /// 获取应用列表（所有）
  export const getApplicationList = base.createNoParamsJsonRequest<Array<Model.ApplicationResponseDto>>(() => ({
      url: `/application/list`,
      method: 'GET'
  }))

/**
 * 获取应用列表（分页）
 */
  export const getApplicationPaged = base.createJsonRequest<Model.ApplicationQueryRequestDto,Model.GetApplicationPagedResponse>((data) => ({
      url: `/application/paged`,
      method: 'POST',
      data
  }))

/**
 * 修改应用
 */
  export const modifyApplication = base.createJsonRequest<Model.ApplicationEditRequestDto>((data) => ({
      url: `/application`,
      method: 'PATCH',
      data
  }))

/**
 * 删除应用
 */
  export const removeApplication = base.createJsonRequest<Model.RemoveApplicationRequest>((req) => ({
      url: `/application/${req.id}`,
      method: 'DELETE',
  }))
