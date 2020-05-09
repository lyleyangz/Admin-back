import request from "@/utils/axios";

//搜索
export function getSearchGuidePage(params) {
  return request({
    url: "/guidePageWeb/searchGuidePage",
    method: "get",
    baseURL: "/content",
    params
  });
}

//获取版本信息列表
export function getVersionList(params) {
  return request({
    url: "/guidePageWeb/getVersionList",
    method: "get",
    baseURL: "/content",
    params
  });
}

//上传图片引导页信息
export function addPhotoGuidePage(data) {
  return request({
    url: "/guidePageWeb/addPhotoGuidePage",
    method: "post",
    baseURL: "/content",
    data
  });
}

//上传视频引导页信息
export function addVideoGuidePage(data) {
  return request({
    url: "/guidePageWeb/addVideoGuidePage",
    method: "post",
    baseURL: "/content",
    data
  });
}

//删除引导页信息
export function deleteGuidePage(params) {
  return request({
    url: "/guidePageWeb/deleteGuidePage",
    method: "delete",
    baseURL: "/content",
    params
  });
}
