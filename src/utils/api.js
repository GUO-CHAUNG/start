import axios from 'axios'
axios.defaults.baseURL='http://e.ludir.cn/api/hkzf/public/'
const api={
    getlb(){
        return axios.get('home/swiper')
    }
}
export default api