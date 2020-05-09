import request from "@/utils/axios";
//获取认证资格管理列表
export function getApplicationList(params) {
  return request({
    url: "/AuthenticationAppWeb/findUserApplicationList",
    method: "get",
    params
  });
}
export function putApplicationAudit(data) {
  return request({
    url: "/AuthenticationAppWeb/dealApply",
    method: "put",
    data
  });
}
