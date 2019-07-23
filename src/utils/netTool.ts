import axios from 'axios';
const MHttp:any={
    get:function (url:string,data?:object) {
        return axios.get(url,data).then(
            (data)=>{
             console.log(data);
            })
    },
    post:function (url:string,data:object) {
        return axios({
            method:'post',
            url:url,
            data:data
        })
    }
};
export default MHttp;
