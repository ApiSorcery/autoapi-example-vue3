/** 二进制数据返回类型 */
export interface BlobResp {
  /** 文件内容 */
  data: Blob;

  /** 文件类型 */
  type: String;

  /** 文件名 */
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
  id: string;
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
export interface DeleteFileRequest {
  /** 文件UUID */
  id: string;
}

/** 获取文件请求参数 */
export interface GetFileRequest {
  /** 文件UUID */
  id: string;
}

/** 上传文件请求参数 */
export interface UploadFileRequest {
  /** 要上传的文件 */
  file?: File;

  /** 文件描述（可选） */
  description?: string;

  /** 上传进度回调函数 */
  onUploadProgress: (progressEvent: ProgressEvent) => void;
}

/** 分页查询用户列表应答参数 */
export interface GetUserPagedResponse {
  results: Array<UserInfoDto>;

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

/**
 * 返回结果
 */
  data: any;

}

export interface UserInfoDto {
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

/**
 * 邮箱
 */
  email: string;

/**
 * 性别
 */
  gender?: number;

/**
 * 头像
 */
  avatar?: string;

/**
 * 地址
 */
  address?: string;

/**
 * 创建时间
 */
  createdAt: string;

/**
 * 更新时间
 */
  updatedAt?: string;

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

}

export interface UserAddRequestDto {
/**
 * 用户编号
 */
  code: string;

/**
 * 用户名称
 */
  name: string;

/**
 * 邮箱
 */
  email: string;

/**
 * 性别
 */
  gender?: number;

/**
 * 头像
 */
  avatar?: string;

/**
 * 地址
 */
  address?: string;

}

export interface UserModifyRequestDto {
/**
 * 用户ID
 */
  id: number;

/**
 * 用户编号
 */
  code?: string;

/**
 * 用户名称
 */
  name?: string;

/**
 * 邮箱
 */
  email?: string;

/**
 * 性别
 */
  gender?: number;

/**
 * 头像
 */
  avatar?: string;

/**
 * 地址
 */
  address?: string;

}
