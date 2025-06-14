/** 二进制数据返回类型 */
export interface BlobResp {
  data: Blob;
  type: String;
  name: String;
}

/** 删除用户请求参数 */
export interface RemoveUserRequest {
  id: number;
}

/** 校验用户邮箱是否存在请求参数 */
export interface ValidateEmailRequest {
  email: string;
}

/** 校验用户昵称是否存在请求参数 */
export interface ValidateNickNameRequest {
  nickName: string;
}

/** 获取应用详情请求参数 */
export interface GetApplicationInfoRequest {
  id: number;
}

/** 删除应用请求参数 */
export interface RemoveApplicationRequest {
  id: number;
}

/** 获取服务详情请求参数 */
export interface GetServerInfoRequest {
  id: number;
}

/** 删除服务请求参数 */
export interface RemoveServerRequest {
  id: number;
}

/** 获取应用列表（分页）应答参数 */
export interface GetApplicationPagedResponse {
  results: Array<ApplicationResponseDto>;

  total: number;
}

/** 获取服务列表（分页）应答参数 */
export interface GetServerPagedResponse {
  results: Array<ServerResponseDto>;

  total: number;
}

export interface ResultData {
/**
 * 状态码
 */
  status: number;

/**
 * 状态描述
 */
  message: string;

  data: any;

}

export interface UserInfoResponseDto {
/**
 * 用户ID
 */
  id: number;

/**
 * 用户邮箱
 */
  email: string;

/**
 * 用户昵称
 */
  nickName: string;

/**
 * 用户名称
 */
  userName: string;

}

export interface User {
}

export interface SignInResponseDto {
/**
 * 登录令牌
 */
  token: string;

}

export interface SignInRequestDto {
/**
 * 用户邮箱
 */
  email: string;

/**
 * 登录密码
 */
  password: string;

/**
 * 验证码绑定键
 */
  bindKey: string;

/**
 * 验证码
 */
  captcha: string;

}

export interface SignUpRequestDto {
/**
 * 邮箱
 */
  email: string;

/**
 * 验证码
 */
  captcha: number;

/**
 * 密码
 */
  password: string;

}

export interface ModifyPasswordRequestDto {
/**
 * 原始密码
 */
  oldPassword: string;

/**
 * 新密码
 */
  newPassword: string;

/**
 * 确认密码
 */
  confirmPassword: string;

}

export interface SendEmailCaptchaRequestDto {
/**
 * 邮箱
 */
  email: string;

}

export interface FindPasswordRequestDto {
/**
 * 邮箱
 */
  email: string;

/**
 * 验证码
 */
  captcha: number;

/**
 * 新密码
 */
  newPassword: string;

}

export interface ImageCaptchaResponseDto {
/**
 * 验证码绑定键
 */
  bindKey: string;

/**
 * 验证码SVG图片
 */
  image: string;

}

export interface Application {
}

export interface ApplicationResponseDto {
/**
 * 应用ID
 */
  id: number;

/**
 * 应用名称
 */
  name: string;

/**
 * 创建时间
 */
  createdAt: string;

/**
 * 修改时间
 */
  updatedAt: string;

}

export interface Pagination {
/**
 * 页码
 */
  page?: number;

/**
 * 每页数量
 */
  limit?: number;

/**
 * 排序字段
 */
  sortBy?: string;

/**
 * 排序方式
 */
  order?: string;

}

export interface ApplicationQueryRequestDto {
/**
 * 应用名称
 */
  name?: string;

/**
 * 分页信息
 */
  pagination?: Pagination;

}

export interface ApplicationAddRequestDto {
/**
 * 产品ID
 */
  productId: number;

/**
 * 应用名称
 */
  name: string;

}

export interface ApplicationEditRequestDto {
/**
 * 应用ID
 */
  id: number;

/**
 * 应用名称
 */
  name?: string;

}

export interface Server {
}

export interface ServerResponseDto {
/**
 * 服务ID
 */
  id: number;

/**
 * 应用ID
 */
  applicationId: number;

/**
 * 产品ID
 */
  productId: number;

/**
 * 服务令牌
 */
  token?: string;

/**
 * 服务编号
 */
  code: string;

/**
 * 服务名称
 */
  name: string;

/**
 * 创建时间
 */
  createdAt: string;

/**
 * 修改时间
 */
  updatedAt: string;

}

export interface ServerQueryRequestDto {
/**
 * 应用ID
 */
  applicationId?: number;

/**
 * 服务名称
 */
  name?: string;

/**
 * 分页信息
 */
  pagination?: Pagination;

}

export interface ServerAddRequestDto {
/**
 * 产品ID
 */
  productId: number;

/**
 * 应用ID
 */
  applicationId: number;

/**
 * 服务编号
 */
  code: string;

/**
 * 服务名称
 */
  name: string;

}

export interface ServerEditRequestDto {
/**
 * 服务ID
 */
  id: number;

/**
 * 服务编号
 */
  code?: string;

/**
 * 服务名称
 */
  name?: string;

}

export interface ReportResponseDto {
/**
 * 统计结果
 */
  results: Array<any>;

}

export interface ReportQueryRequestDto {
/**
 * 应用ID
 */
  applicationId?: number;

/**
 * 服务ID
 */
  serverId?: number;

/**
 * 开始时间
 */
  startTime: string;

/**
 * 结束时间
 */
  endTime: string;

}
