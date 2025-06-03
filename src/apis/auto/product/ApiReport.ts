/// 统计管理
import * as base from './base';
import * as Model from './model';

/**
 * 获取按日统计数据
 */
  export const getReportDay = base.createJsonRequest<Model.ReportQueryRequestDto,Model.ReportResponseDto>((data) => ({
      url: `/report/day`,
      method: 'POST',
      data
  }))

/**
 * 获取按小时统计数据
 */
  export const getReportHour = base.createJsonRequest<Model.ReportQueryRequestDto,Model.ReportResponseDto>((data) => ({
      url: `/report/hour`,
      method: 'POST',
      data
  }))

/**
 * 获取按分钟统计数据
 */
  export const getReportMinute = base.createJsonRequest<Model.ReportQueryRequestDto,Model.ReportResponseDto>((data) => ({
      url: `/report/minute`,
      method: 'POST',
      data
  }))
