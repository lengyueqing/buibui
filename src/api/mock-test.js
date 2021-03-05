import axios from "axios"
/**
 * 获取模拟数据
 */
//轮播图数据
export const reqGetBanners = () => {
  return axios.get("/mock/banners")
};
//导航条数据

export const reqGetTitle = () => {
  return axios.get("/mock/nav")
};

export const reqGetImg = () => {
  return axios.get("/mock/test")
};

export const reqGetSmmile = () => {
  return axios.get("/mock/smmile")
};