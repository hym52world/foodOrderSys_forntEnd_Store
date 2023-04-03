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
// };

// 仔仔，别拉黑我了，我不想跟你谈恋爱了，我想给你成为朋友，我没有乱写，都写在备注里，
// 请别生气
// 时间太久了，我忘不了你，请您给我一个缓冲期好吗？时至今日我无法理解为什么你如此恨我，
// 请帮帮我
