//封装所有的请求
import http from './index'
export default {

    //1.获取首页数据（get）
    getGoodsHome(){
        return http.get('/goods/home')
    },
    
    
    
}