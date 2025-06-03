/// 用户认证
import * as base from './base';
import * as Model from './model';

/**
 * 用户登录
 */
  export const authSignIn = base.createJsonRequest<Model.SignInRequestDto,Model.SignInResponseDto>((data) => ({
      url: `/auth/signIn`,
      method: 'POST',
      data
  }))

/**
 * 新增用户
 */
  export const authSignUp = base.createJsonRequest<Model.SignUpRequestDto,number>((data) => ({
      url: `/auth/signUp`,
      method: 'POST',
      data
  }))

/**
 * 找回密码
 */
  export const findPassword = base.createJsonRequest<Model.FindPasswordRequestDto>((data) => ({
      url: `/auth/findPassword`,
      method: 'POST',
      data
  }))

/**
 * 生成验证码
 */
  export const generateCaptcha = base.createNoParamsJsonRequest<Model.ImageCaptchaResponseDto>(() => ({
      url: `/auth/captcha`,
      method: 'GET'
  }))

/**
 * 修改密码
 */
  export const modifyPassword = base.createJsonRequest<Model.ModifyPasswordRequestDto>((data) => ({
      url: `/auth/modifyPassword`,
      method: 'POST',
      data
  }))

/**
 * 发送邮箱验证码
 */
  export const sendEmailCaptcha = base.createJsonRequest<Model.SendEmailCaptchaRequestDto>((data) => ({
      url: `/auth/sendEmailCaptcha`,
      method: 'POST',
      data
  }))
