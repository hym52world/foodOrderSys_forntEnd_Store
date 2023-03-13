import axios from "@/http/axios.js"
//请求示例
//get
export const tenantLogin = (data) => {
    return axios({
        url: "/tenant/login",
        method: "post",
        data,
        config: {
            timeout: 10000
        }
    })
}
