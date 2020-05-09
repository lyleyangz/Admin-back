import request from "@/utils/axios";

//搜索
export function searchSystemNotifies(params) {
  return request({
    url: "/msgPushWeb/searchSystemNotifies",
    method: "get",
    baseURL: "/content",
    params
  });
}

//推送系统消息/通知
export function pushSystemNotice(data) {
  return request({
    url: "/msgPushWeb/pushSystemNotice",
    method: "post",
    baseURL: "/content",
    data
  });
}

//搜索指定文章
export function getArticleInfo(params) {
  return request({
    url: "/msgPushWeb/getArticleInfo",
    method: "get",
    baseURL: "/content",
    params
  });
}

//搜索指定用户
export function getUserInfo(params) {
  return request({
    url: "/msgPushWeb/getUserInfo",
    method: "get",
    baseURL: "/content",
    params
  });
}

//搜索指定品种圈
export function searchCurrencyInfo(params) {
  return request({
    url: "/msgPushWeb/searchCurrencyInfo",
    method: "get",
    baseURL: "/content",
    params
  });
}

//获取通知详情
export function getSystemNotifyInfo(params) {
  return request({
    url: "/msgPushWeb/getSystemNotifyInfo",
    method: "get",
    baseURL: "/content",
    params
  });
}

//删除推送任务
export function delSystemNotify(params) {
  return request({
    url: "/msgPushWeb/delSystemNotify",
    method: "delete",
    baseURL: "/content",
    params
  });
}

//编辑系统通知
export function editSystemNotify(data) {
  return request({
    url: "/msgPushWeb/editSystemNotify",
    method: "put",
    baseURL: "/content",
    data
  });
}
