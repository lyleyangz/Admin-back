import request from "@/utils/axios";

const getAliOSSCreds = params => {
  return request({
    url: "/base/getOssToken",
    method: "get",
    params
  });
};
const beforeAvatarUpload = file => {
  const isJPG = file.type === "image/jpeg";
  const isPNG = file.type === "image/png";
  const isGIF = file.type === "image/gif";
  const isApk = file.type === "application/vnd.android.package-archive";
  const isLt1M = file.size / 1024 / 1024 <= isApk ? 100 : 10;
  if (!isLt1M) {
    alert(`上传${isApk ? "安卓包" : "头像图片"}大小不能超过 ${isApk ? 100 : 10}MB!`);
  }
  if (!isJPG && !isPNG && !isGIF && !isApk) {
    alert("上传头像图片只能是JPG或者PNG或GIF或APK格式!");
  }
  return isLt1M && (isPNG || isJPG || isGIF);
};

const generateUUID = () => {
  var d = new Date().getTime();
  if (window.performance && typeof window.performance.now === "function") {
    d += performance.now(); //use high-precision timer if available
  }
  var uuid = "xxxxxxxxxxxxxxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
  return uuid;
};

export const upLoad = {
  uploader: (item, fileType, uid) => {
    if (!beforeAvatarUpload(item, fileType)) {
      return;
    }
    let params = {};
    params.type = fileType;
    params.uid = uid;
    return getAliOSSCreds(params).then(res => {
      let oss = require("ali-oss");
      let client = new oss({
        region: res.region,
        secure: true,
        accessKeyId: res.accessKeyId,
        accessKeySecret: res.accessKeySecret,
        stsToken: res.securityToken,
        bucket: res.bucket,
        endpoint: res.endpoint
      });
      let suxfile = item.name.split(".");
      let key = res.dir + "/" + generateUUID() + "." + suxfile[1];
      return client.put(key, item);
    });
  }
};

export default {
  upLoad
};
