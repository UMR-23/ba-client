const INFO_KEY = "lxw_user_info";

//把vuex的token放拿删到本地，三个方法：
export const getInfo = () => {
    //直接拿本地，返回时判断数据的数据是否有
    const res = localStorage.getItem(INFO_KEY);
    return res ? JSON.parse(res) : {
        id: '',
        token: '',
    }
}

export const setInfo =(obj)=>{
    //把数据转为json然后存入本地：
    localStorage.setItem(INFO_KEY,JSON.stringify(obj))
}

export const deleteInfo=()=>{
    //直接删：
    localStorage.removeItem(INFO_KEY)
}




