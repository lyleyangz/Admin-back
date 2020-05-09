import request from "@/utils/axios";
//获取标签类目
export function getTagTypeAndCategory(params) {
  return request({
    url: "/tagWeb/getTagTypeAndCategory",
    method: "get",
    baseURL: "/content",
    params
  });
}
//获取标签类目
export function getTagTypeList(params) {
  return request({
    url: "/tagWeb/searchTag",
    method: "get",
    baseURL: "/content",
    params
  });
}

export function getTagTypesList() {
  return request({
    url: "/tagWeb/getTagTypesList",
    method: "get",
    baseURL: "/content"
  });
}
//添加标签
export function addTag(data) {
  return request({
    url: "/tagWeb/addTag",
    method: "put",
    baseURL: "/content",
    data
  });
}

//删除标签
export function removeTag(params) {
  return request({
    url: "/tagWeb/removeTag",
    method: "delete",
    baseURL: "/content",
    params
  });
}
//编辑标签
export function editTag(data) {
  return request({
    url: "/tagWeb/editTag",
    method: "put",
    baseURL: "/content",
    data
  });
}

//获取语言类型列表
export function getLocaleList(params) {
  return request({
    url: "/tagWeb/getLocaleList",
    method: "get",
    baseURL: "/content",
    params
  });
}
//根据标签类型获取可选标签列表
export function getClassOptionalTagsByTypeId(params) {
  return request({
    url: "/tagWeb/getClassOptionalTagsByTypeId",
    method: "get",
    baseURL: "/content",
    params
  });
}

// 标签设置热门
export function setHot(data) {
  return request({
    url: "/tagWeb/setTagHot",
    method: "put",
    baseURL: "/content",
    data
  });
}

// 标签设置显示/不显示
export function setTagVisible(data) {
  return request({
    url: "/tagWeb/setTagVisible",
    method: "put",
    baseURL: "/content",
    data
  });
}

// 获取标签类目
export function getTagType(params) {
  return request({
    url: "/tagWeb/getTagCategory",
    method: "get",
    baseURL: "/content",
    params
  });
}
