import request from "@/utils/axios";

//查询换榜申请列表
export function getRankRegionList(params) {
  return request({
    url: "/helpCenter/findRankRegionList",
    method: "get",
    params
  });
}

//处理换榜申请
export function dealRankRegion(params) {
  return request({
    url: "/helpCenter/dealRankRegion",
    method: "put",
    data: params
  });
}
