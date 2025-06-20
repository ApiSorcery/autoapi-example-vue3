/** 二进制数据返回类型 */
export interface BlobResp {
  data: Blob;
  type: String;
  name: String;
}

/** 批量导出用户（Excel）请求参数 */
export interface ExportUsersRequest {
  code: string;

  name: string;

  email: string;
}

/** 获取单个用户请求参数 */
export interface GetUserOneRequest {
  id: number;
}

/** 删除用户请求参数 */
export interface RemoveUserRequest {
  id: number;
}

/** 校验用户编号是否存在请求参数 */
export interface ValidateCodeRequest {
  code: string;
}

/** 校验用户邮箱是否存在请求参数 */
export interface ValidateEmailRequest {
  email: string;
}

/** 删除文件请求参数 */
export interface FileControllerDeleteFileRequest {
  /** 文件UUID */
  id: string;
}

/** 获取文件请求参数 */
export interface FileControllerGetFileRequest {
  /** 文件UUID */
  id: string;
}

/** 分页查询用户列表应答参数 */
export interface GetUserPageResponse {
  results: Array<User>;

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
 * 用户编号
 */
  code: string;

/**
 * 用户名称
 */
  name: string;

}

export interface User {
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

export interface UserPageQueryDto {
/**
 * 分页参数
 */
  pagination?: Pagination;

/**
 * 用户编码
 */
  code?: string;

/**
 * 用户姓名
 */
  name?: string;

/**
 * 用户邮箱
 */
  email?: string;

}

export interface SignInResponseDto {
/**
 * 登录令牌
 */
  token: string;

}

export interface SignInRequestDto {
/**
 * 用户编号
 */
  code: string;

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
