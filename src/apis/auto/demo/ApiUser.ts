/// 用户管理
import * as base from './base';
import * as Model from './model';

/**
 * 新增用户
 */
export const addUser = base.createJsonRequest<Model.UserAddRequestDto,number>((data) => ({
  url: `/user`,
  method: 'POST',
  data
}))

/**
 * 批量导出用户（Excel）
 */
export const exportUsers = base.createDownloadRequest<Model.ExportUsersRequest>((req) => ({
  url: `/user/export`,
  method: 'GET',
  params: {'code': req.code,'name': req.name,'email': req.email},
}))

/**
 * 获取单个用户
 */
export const getUserOne = base.createJsonRequest<Model.GetUserOneRequest,Model.UserInfoDto>((req) => ({
  url: `/user/${req.id}`,
  method: 'GET',
}))

/**
 * 分页查询用户列表
 */
export const getUserPaged = base.createJsonRequest<Model.UserPageQueryDto,Model.GetUserPagedResponse>((data) => ({
  url: `/user/paged`,
  method: 'POST',
  data
}))

/**
 * 修改用户信息
 */
export const modifyUser = base.createJsonRequest<Model.UserModifyRequestDto>((data) => ({
  url: `/user`,
  method: 'PATCH',
  data
}))

/**
 * 删除用户
 */
export const removeUser = base.createJsonRequest<Model.RemoveUserRequest>((req) => ({
  url: `/user/${req.id}`,
  method: 'DELETE',
}))

/**
 * 校验用户编号是否存在
 */
export const validateCode = base.createJsonRequest<Model.ValidateCodeRequest,boolean>((req) => ({
  url: `/user/validateCode`,
  method: 'GET',
  params: {'code': req.code},
}))

/**
 * 校验用户邮箱是否存在
 */
export const validateEmail = base.createJsonRequest<Model.ValidateEmailRequest,boolean>((req) => ({
  url: `/user/validateEmail`,
  method: 'GET',
  params: {'email': req.email},
}))
