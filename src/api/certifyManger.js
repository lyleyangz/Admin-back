import request from "@/utils/axios";

//搜索
export function getCertifyList(params) {
  return request({
    url: "/authenticationWeb/findAuthenticationList",
    method: "get",
    baseURL: "/content",
    params
  });
}

//新增认证信息
export function addAuthentication(data) {
  return request({
    url: "/authenticationWeb/addAuthentication",
    method: "post",
    baseURL: "/content",
    data
  });
}

//修改认证信息
export function updateAuthentication(data) {
  return request({
    url: "/authenticationWeb/updateAuthentication",
    method: "put",
    baseURL: "/content",
    data
  });
}

//删除认证信息
export function deleteAuthentication(params) {
  return request({
    url: "/authenticationWeb/deleteAuthentication",
    method: "delete",
    baseURL: "/content",
    params
  });
}
