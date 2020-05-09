import request from "@/utils/axios";
//获取反馈列表
export function getFeedbackList(params) {
  return request({
    url: "/feedBack/findFeedBackList",
    method: "get",
    params
  });
}
//处理反馈
export function dealFeedBack(data) {
  return request({
    url: "/feedBack/dealFeedBack",
    method: "put",
    data
  });
}

//发送反馈通知
export function sendFeedBackNotice(data) {
  return request({
    url: "/feedBack/sendFeedBackNotice",
    method: "post",
    data
  });
}
