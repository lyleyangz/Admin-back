import request from "@/utils/axios";

//获取搜索词列表
export function getSearchWordList(params) {
  return request({
    url: "/searchWeb/findSearchWordList",
    method: "get",
    baseURL: "/content",
    params: params
  });
}
//添加搜索词
export function addSearchWord(data) {
  return request({
    url: "/searchWeb/addSearchWord",
    method: "post",
    baseURL: "/content",
    data
  });
}
//显示搜索词
export function displaySearchWord(data) {
  return request({
    url: "/searchWeb/displaySearchWord",
    method: "put",
    baseURL: "/content",
    data
  });
}

//热搜取消热搜
export function hotSearchWord(data) {
  return request({
    url: "/searchWeb/hotSearchWord",
    method: "put",
    baseURL: "/content",
    data
  });
}

//删除搜索词
export function deleteSearchWord(params) {
  return request({
    url: "/searchWeb/deleteSearchWord",
    method: "delete",
    baseURL: "/content",
    params
  });
}
