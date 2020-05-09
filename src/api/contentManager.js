import request from "@/utils/axios";
//获取内容管理列表
export function getContentList(params) {
  return request({
    url: "/contentWeb/searchContent",
    method: "get",
    baseURL: "/content",
    params
  });
}

//审核文章详情
export function getArticleDetail(params) {
  return request({
    url: "/contentWeb/getArticleDetail",
    method: "get",
    baseURL: "/content",
    params
  });
}

//批量下架/删除文章
export function batchTakeOffOrDeleteArticle(data) {
  return request({
    url: "/contentWeb/batchTakeOffOrDeleteArticle",
    method: "put",
    baseURL: "/content",
    data
  });
}
//批量推荐/取消推荐文章
export function setRecommendArticle(data) {
  return request({
    url: "/contentWeb/setRecommendArticle",
    method: "put",
    baseURL: "/content",
    data
  });
}

//查询文章下得一级评论
export function getCommentList(params) {
  return request({
    url: "/contentWeb/getArticleFirstComment",
    method: "get",
    baseURL: "/content",
    params
  });
}
//获取被举报记录(文章、用户、评论、回复)
export function getReportedRecord(params) {
  return request({
    url: "/contentWeb/getReportedRecord",
    method: "get",
    baseURL: "/content",
    params
  });
}

//后台管理-回复
export function addReply(data) {
  return request({
    url: "/contentWeb/addReply",
    method: "post",
    baseURL: "/content",
    data
  });
}

//查看一级评论下的回复
export function getReplyOfComment(params) {
  return request({
    url: "/contentWeb/getReplyOfComment",
    method: "get",
    baseURL: "/content",
    params
  });
}
//添加评论
export function addComment(data) {
  return request({
    url: "/contentWeb/addComment",
    method: "post",
    baseURL: "/content",
    data
  });
}

//观点审核
export function auditArticle(data) {
  return request({
    url: "/contentWeb/auditArticle",
    method: "put",
    baseURL: "/content",
    data
  });
}

//配置文章热度
export function setArticleHeat(data) {
  return request({
    url: "/contentWeb/addArticleVirtualHeat",
    method: "post",
    baseURL: "/content",
    data
  });
}

// 获取文章交易观点
export function getTradingOpinion(params) {
  return request({
    url: "/contentWeb/getTradingOpinion",
    method: "get",
    baseURL: "/content",
    params
  });
}
