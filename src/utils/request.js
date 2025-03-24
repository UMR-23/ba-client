import axios from "axios";


// 创建实例：
const request = axios.create({
    baseURL: '/api',
    timeout: 3000,
});

// 添加请求拦截器
request.interceptors.request.use(function (config) {
  
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
request.interceptors.response.use(function (response) {

    // 对响应数据做点什么,错误信息统一处理：
    const res = response.data;
    if (response.status != 200) {
        return Promise.reject(res.message);
    } 
    return res
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

// 导出：
export default request