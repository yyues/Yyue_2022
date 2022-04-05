// 声明action操作函数，我看像是简化
// dispatch的请求参数，直接传参来解决该问题
import { PULSOUNT, MINXCOUNT } from "./type";

export const PULSCOUNT = (value = 0) => {
  return { type: PULSOUNT, data: value + 1 };
};
export const MINCOUNT = (value: number) => {
  return { type: MINXCOUNT, data: value - 1 };
};
