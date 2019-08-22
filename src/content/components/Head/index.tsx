import * as React from 'react'
import {NavLink} from "react-router-dom";
import * as History from "history";
interface IState {
    index:Number
}
interface IProps {

}
class Head extends React.Component<IProps,IState>{
    state:IState;
    constructor(props:IProps){
        super(props);
        this.state={index:0};
        this.init=this.init.bind(this);
        this.tabClick=this.tabClick.bind(this);

    }
    componentWillMount(): void {
        this.init();
    }

    init(){
        let {hash}=History.parsePath(location.href);
        console.log(hash);
        if(hash.indexOf("home") != -1 ){
            this.setState({
                index:0
            })
        }
        if(hash.indexOf("article")!=-1){
            this.setState({
                index:1
            })
        }
        if(hash.indexOf("study")!=-1){
            this.setState({
                index:2
            })
        }
        if(hash.indexOf("think")!=-1){
            this.setState({
                index:3
            })
        }
        if(hash.indexOf("sport")!=-1){
            this.setState({
                index:4
            })
        }
        if(hash.indexOf("about")!=-1){
            this.setState({
                index:5
            })
        }
        if(hash.indexOf("login")!=-1){
            this.setState({
                index:6
            })
        }

    }
    tabClick(index:Number){
        this.setState({
            index:index
        })
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        let {index}=this.state;
        return <div className={"head"}>
                <NavLink to={"/web/home"} className={"navLink "+(index===0?"active":"")} onClick={()=>{this.tabClick(0)}}>首页</NavLink>
                <NavLink to={"/web/article"} className={"navLink "+(index===1?"active":"")}  onClick={()=>{this.tabClick(1)}}>文章</NavLink>
                <NavLink to={"/web/study"} className={"navLink "+(index===2?"active":"")}  onClick={()=>{this.tabClick(2)}}>学习</NavLink>
                <NavLink to={"/web/think"} className={"navLink "+(index===3?"active":"")}  onClick={()=>{this.tabClick(3)}}>奇思妙想</NavLink>
                <NavLink to={"/web/sport"} className={"navLink "+(index===4?"active":"")}  onClick={()=>{this.tabClick(4)}}>运动</NavLink>
                <NavLink to={"/web/about"} className={"navLink "+(index===5?"active":"")}  onClick={()=>{this.tabClick(5)}}>关于</NavLink>
                <NavLink to={"/web/login"} className={"navLink "+(index===6?"active":"")}  onClick={()=>{this.tabClick(6)}}>登录</NavLink>
            </div>;
    }
}
export default Head;
