import request from "@/utils/request";


export function getStuInfor(sutId){
    return request({
        url:`/user/student/getStuInfor/${sutId}`,
        method:'get',
    })
}