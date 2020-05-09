import request from "@/utils/axios";

//搜索
export function getCommentList(params) {
  return request({
    url: "/commentWeb/searchPendingAuditComment",
    method: "get",
    baseURL: "/content",
    params
  });
}

//批量删除评论/回复
export function deleteCommentOrReplyBatch(data) {
  return request({
    url: "/commentWeb/deleteCommentOrReplyBatch",
    method: "put",
    baseURL: "/content",
    data
  });
}

//获取评论/回复内容
export function getCommentOrReplyContent(params) {
  return request({
    url: "/commentWeb/getCommentOrReplyContent",
    method: "get",
    baseURL: "/content",
    params
  });
}

//审核评论/回复
export function auditCommentOrReply(data) {
  return request({
    url: "/commentWeb/auditCommentOrReply",
    method: "put",
    baseURL: "/content",
    data
  });
}
