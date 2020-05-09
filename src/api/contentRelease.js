import request from "@/utils/axios";
//获取用户发布得文章列表
export function getUserArticleList(params) {
  return request({
    url: "/contentPublish/getUserArticleList",
    method: "get",
    baseURL: "/content",
    params
  });
}
//发布
export function publishArticle(data) {
  return request({
    url: "/contentPublish/publishArticle",
    method: "post",
    baseURL: "/content",
    data
  });
}
