import request from "@/utils/request";

export function sendEmail(qqEmail){
    return request({
        url: '/user/user/email',
        method: 'post',
        data:{ qqemail: qqEmail }
    })
}

export function register(registerData){
    return request({
        url:'/user/user/register',
        method:'post',
        data:registerData
    })
}


export function login(loginData){
    return request({
        url:'/user/user/login',
        method:'post',
        data:loginData
    })
}