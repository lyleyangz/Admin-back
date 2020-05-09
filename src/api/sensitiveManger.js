import request from "@/utils/axios";

//搜索
export function getSensitiveList(params) {
  return request({
    url: "/sensitive/findSensitiveList",
    method: "get",
    baseURL: "/content",
    params
  });
}

//新增敏感词
export function addSensitiveWord(data) {
  return request({
    url: "/sensitive/addSensitiveWord",
    method: "post",
    baseURL: "/content",
    data
  });
}

//删除敏感词
export function deleteSensitiveWord(params) {
  return request({
    url: "/sensitive/deleteSensitiveWord",
    method: "delete",
    baseURL: "/content",
    params
  });
}

//修改敏感词
export function updateSensitiveWord(data) {
  return request({
    url: "/sensitive/updateSensitiveWord",
    method: "put",
    baseURL: "/content",
    data
  });
}

//批量导入敏感词
export function batchImportSensitiveWord(data) {
  return request({
    url: "/sensitive/batchImportSensitiveWord",
    method: "post",
    baseURL: "/content",
    data
  });
}
