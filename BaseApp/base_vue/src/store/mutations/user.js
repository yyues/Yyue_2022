
const userMutation ={
    //    已经登录的fun
    handleLogin(state,payload){
        state.LoginStatus = true
        //存储登录状态值和username
        sessionStorage.setItem('userToken','true')
        sessionStorage.setItem('username',payload)
    },
    //退出登录处理
    outLogin(state){
        state.LoginStatus = false
        sessionStorage.removeItem('userToken')
    },
    //清除本地缓存信息
    delLocalUserData(){
        sessionStorage.removeItem('userToken')
        sessionStorage.removeItem('username')
    }
}
export default userMutation