import * as React from 'react';
import Pager from "../content/components/Pager";
import Input from "../content/components/Input/Input";
import MHttp from "../utils/netTool";
// @ts-ignore
import Moment from "moment";
// @ts-ignore
import Md5 from "md5";

class Login extends React.Component{
    private myUsernameRef: React.RefObject<any>;
    private myPasswordRef: React.RefObject<any>;
    constructor(props:any) {
        super(props);
        this.myUsernameRef = React.createRef();
        this.myPasswordRef = React.createRef();
        this.login=this.login.bind(this);
        this.login2=this.login2.bind(this);
    }
    componentDidMount(): void {
        console.log(this.myUsernameRef);
        console.log(this.myPasswordRef);
    }
    login(){
        console.log(this.myUsernameRef.current.value);
        console.log(this.myPasswordRef.current.value);
        MHttp.post("http://localhost:8080/restart_war_exploded/firstServlet",{username:this.myUsernameRef.current.value,password:this.myPasswordRef.current.value});
    }
    login2(){
        let agr="ind_id=1&partner_id=5000001&page_number=1&city_code=510100&page_size=50&timestamp=";

        let date=new Date();
        console.log(Moment(date).format("YYYY-MM-DD hh:mm:ss"));
        let time=Moment(date).format("YYYY-MM-DD hh:mm:ss");
        console.log(time)
        let o:{key:string,value:any}[]=[
            {key:"timestamp",value:time},
            {key:"ind_id",value:1},
            {key:"partner_id",value:5000001},
            {key:"page_number",value:1},
            {key:"city_code",value:510100}
        ];
        console.log(o);
        o.sort((a:{key:string,value:any},b:{key:string,value:any})=>{
            if(a.key>b.key){
                return 1
            }else if(a.key<b.key){
                return -1
            }else{
                return 0
            }
        });
        console.log(o);
        let str="";
        o.forEach((a:{key:string,value:any},index:number)=>{
            if(index===(o.length-1)){
                str+=a.key+"="+a.value;
            }else {
                str+=a.key+"="+a.value+"&";;
            }
            console.log(str)
        })
        console.log(str);
        agr=str+"A9A2C4E99BD2804885C4D7BD1EA7DEDD";
        console.log(Md5(agr));
        let md5Str=Md5(agr)
        /*let url="http://api.bnd.dongsport.com:6005/merchant/search.json?"+str+"&signature="+md5Str;
        MHttp.get(url).then((data:any)=>{
            console.log("---"+data);
        })*/




  }


    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return <Pager>
               <Input title={"账号"} Mref={this.myUsernameRef}/>
               <Input title={"密码"} type={'password'}  Mref={this.myPasswordRef}/>
               <button onClick={this.login}>登录</button>

               <button onClick={this.login2}>test</button>
            </Pager>
    }
}
export default Login;
