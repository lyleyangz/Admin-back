import request from "@/utils/axios";
//下载列表
export function getDownloadList(params) {
  return request({
    url: "/appVersionWeb/findAppVersionList",
    method: "get",
    baseURL: "/content",
    params
  });
}
//删除
export function deleteAppVersion(params) {
  return request({
    url: "/appVersionWeb/deleteAppVersion",
    method: "delete",
    baseURL: "/content",
    params
  });
}
//修改
export function updateAppVersion(data) {
  return request({
    url: "/appVersionWeb/updateAppVersion",
    method: "put",
    baseURL: "/content",
    data
  });
}
//新增
export function addAppVersion(data) {
  return request({
    url: "/appVersionWeb/addAppVersion",
    method: "post",
    baseURL: "/content",
    data
  });
}
