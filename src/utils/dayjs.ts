import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import 'dayjs/locale/zh-cn';

/** 本地化 */
dayjs.locale('zh-cn');
// 设置默认时区为东八区（仅对在dayjs.tz()中使用的时区有效）
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('Asia/Shanghai');
// 包装 dayjs.tz 函数
const dayjsWrapper = function (...args: any[]) {
  return dayjs(...args).tz();
};
// 将 dayjs 上的所有属性方法都加到 dayjsWrapper 上
Object.assign(dayjsWrapper, dayjs);

export default dayjsWrapper;
