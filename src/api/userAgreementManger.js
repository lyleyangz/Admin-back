import request from "@/utils/axios";

//查询用户协议和隐私协议修改时间列表
export function findUpdateTimeList(params) {
  return request({
    url: "/specification/findUpdateTimeList",
    method: "get",
    params
  });
}

//查询用户协议和隐私协议
export function findAgreement(params) {
  return request({
    url: "/specification/findAgreement",
    method: "get",
    params
  });
}

//保存用户协议
export function saveAgreement(data) {
  return request({
    url: "/specification/saveAgreement",
    method: "post",
    data
  });
}

//保存隐私协议
export function savePrivacyPolicy(data) {
  return request({
    url: "/specification/savePrivacyPolicy",
    method: "post",
    data
  });
}

//查询技术分析说明列表
export function findTechnicalList(params) {
  return request({
    url: "/specification/findTechnicalList",
    method: "get",
    params
  });
}

//保存技术分析说明
export function saveTechnicalSpecification(data) {
  return request({
    url: "/specification/saveTechnicalSpecification",
    method: "post",
    data
  });
}

//删除技术分析说明
export function deleteTechnical(params) {
  return request({
    url: "/specification/deleteTechnical",
    method: "delete",
    params
  });
}

//查询技术分析说明详情
export function findTechnicalDetail(params) {
  return request({
    url: "/specification/findTechnicalDetail",
    method: "get",
    params
  });
}

//保存榜单规则
export function saveRankingRule(data) {
  return request({
    url: "/specification/saveRankingRule",
    method: "post",
    data
  });
}
