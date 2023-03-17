import axios from "@/http/axios.js"
//请求示例
// 获取租户token
export const api_login = (data) => {
    return axios({
        url: "/tenant/login",
        method: "post",
        data,
        config: {
            timeout: 10000
        }
    })
}

// 根据租户token获取租户信息
export const api_getTenantInfo = (data) => {
    return axios({
        url: "/tenant/info",
        method: "post",
        data,
        config: {
            timeout: 10000
        }
    })
}