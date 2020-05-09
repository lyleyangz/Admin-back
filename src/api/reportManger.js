import request from "@/utils/axios";

//查询用户详情资料
export function getUserDetail(params) {
  return request({
    url: "/reportWeb/getUserDetail",
    method: "get",
    baseURL: "/content",
    params
  });
}

//搜索
export function searchReport(params) {
  return request({
    url: "/reportWeb/searchReport",
    method: "get",
    baseURL: "/content",
    params
  });
}

//用户禁言
export function userForbidden(data) {
  return request({
    url: "/reportWeb/userForbidden",
    method: "post",
    baseURL: "/content",
    data
  });
}

//批量标记举报记录已处理/未处理
export function batchMarkReport(data) {
  return request({
    url: "/reportWeb/batchMarkReport",
    method: "put",
    baseURL: "/content",
    data
  });
}
