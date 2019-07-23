import * as React from 'react';
import Pager from "../content/components/Pager";
import Input from "../content/components/Input/Input";
import MHttp from "../utils/netTool";
class Login extends React.Component{
    private myUsernameRef: React.RefObject<any>;
    private myPasswordRef: React.RefObject<any>;
    constructor(props:any) {
        super(props);
        this.myUsernameRef = React.createRef();
        this.myPasswordRef = React.createRef();
        this.login=this.login.bind(this);
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

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return <Pager>
               <Input title={"账号"} Mref={this.myUsernameRef}/>
               <Input title={"密码"} type={'password'}  Mref={this.myPasswordRef}/>
               <button onClick={this.login}>登录</button>
            </Pager>
    }
}
export default Login;
