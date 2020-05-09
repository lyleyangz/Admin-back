import request from "@/utils/axios";
//获取内容账号列表
export function getContentAccountList(params) {
  return request({
    url: "/contentAccount/findContentAccountList",
    method: "get",
    params
  });
}

export function removeAccount(params) {
  return request({
    url: "/contentAccount/removeAccount",
    method: "put",
    params
  });
}
//导入
export function batchImportAccounts(params, region) {
  return request({
    url: "/contentAccount/batchImportAccounts",
    method: "post",
    data: params,
    headers: {
      "Content-Type": "multipart/form-data",
      region: region
    }
  });
}
