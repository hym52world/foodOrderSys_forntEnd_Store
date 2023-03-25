import axios from "@/http/axios.js";

// 获取餐位列表
export const api_listMealSeats = (data) => {
  return axios({
    url: "/mealSeats/list",
    method: "post",
    data,
  });
};

// 添加餐位
export const api_addMealSeats = (data) => {
  return axios({
    url: "/mealSeats/add",
    method: "post",
    data,
  });
};
