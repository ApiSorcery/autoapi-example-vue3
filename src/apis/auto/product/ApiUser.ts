/// 用户管理
import * as base from './base';
import * as Model from './model';

/**
 * 新增用户
 */
  export const addUser = base.createJsonRequest<Model.User,number>((data) => ({
      url: `/user`,
      method: 'POST',
      data
  }))

/**
 * 获取用户信息
 */
  export const getUserInfo = base.createNoParamsJsonRequest<Model.UserInfoResponseDto>(() => ({
      url: `/user`,
      method: 'GET'
  }))

/**
 * 修改用户信息
 */
  export const modifyUser = base.createNoParamsJsonRequest(() => ({
      url: `/user`,
      method: 'PATCH'
  }))

/**
 * 删除用户
 */
  export const removeUser = base.createJsonRequest<Model.RemoveUserRequest>((req) => ({
      url: `/user/${req.id}`,
      method: 'DELETE',
  }))

/**
 * 校验用户邮箱是否存在
 */
  export const validateEmail = base.createJsonRequest<Model.ValidateEmailRequest,Model.UserInfoResponseDto>((req) => ({
      url: `/user/validateEmail`,
      method: 'GET',
      params: {'email': req.email},
  }))

/**
 * 校验用户昵称是否存在
 */
  export const validateNickName = base.createJsonRequest<Model.ValidateNickNameRequest,boolean>((req) => ({
      url: `/user/validateNickName`,
      method: 'GET',
      params: {'nickName': req.nickName},
  }))
