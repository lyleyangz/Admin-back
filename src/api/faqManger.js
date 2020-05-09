import request from "@/utils/axios";

//查询FAQ列表
export function findFAQList(params) {
  return request({
    url: "/faqWeb/findFAQList",
    method: "get",
    params
  });
}

//保存FAQ
export function saveFAQ(data) {
  return request({
    url: "/faqWeb/saveFAQ",
    method: "post",
    data
  });
}

//删除FAQ
export function deleteFAQ(params) {
  return request({
    url: "/faqWeb/deleteFAQ",
    method: "delete",
    params
  });
}

//热门/取消热门
export function hotFAQ(data) {
  return request({
    url: "/faqWeb/hotFAQ",
    method: "put",
    data
  });
}

//查询FAQ详情
export function findFAQDetail(params) {
  return request({
    url: "/faqWeb/findFAQDetail",
    method: "get",
    params
  });
}
