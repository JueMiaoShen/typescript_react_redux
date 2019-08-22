import * as React from 'react';
import Pager from "../content/components/Pager";
import Input from "../content/components/Input/Input";
import MHttp from "../utils/netTool";
import MySwiper from "../content/components/MySwiper";
class Think extends React.Component{
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
           <MySwiper Img={[
               "https://10wallpaper.com/wallpaper/1366x768/1604/Chinese_youth_fashion_beauty_actress_photo_wallpaper_12_1366x768.jpg",
               "http://img2.ph.126.net/HkWDBo1_O7RiA3OtG_XESw==/6597672299028888602.jpg",
               "http://pic1.win4000.com/wallpaper/0/589925c501ce8.jpg",
               "http://pic1.win4000.com/wallpaper/0/589925ce681be.jpg",
               "http://pic1.win4000.com/wallpaper/0/589925ca18401.jpg",
               "http://pic1.win4000.com/wallpaper/0/589925cb7d4c2.jpg",
             ]}/>
        </Pager>
    }
}
export default Think;
