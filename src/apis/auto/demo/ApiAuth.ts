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
 * 生成验证码
 */
export const generateCaptcha = base.createNoParamsJsonRequest<Model.ImageCaptchaResponseDto>(() => ({
  url: `/auth/captcha`,
  method: 'GET'
}))
