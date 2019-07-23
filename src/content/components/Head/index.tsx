import * as React from 'react'
import {NavLink} from "react-router-dom";
class Head extends React.Component{
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return <div className={"head"}>
                <NavLink to={"/home"} className={"navLink"}>首页</NavLink>
                <NavLink to={"/login"} className={"navLink"}>文章</NavLink>
                <NavLink to={"/login"} className={"navLink"}>学习</NavLink>
                <NavLink to={"/login"} className={"navLink"}>奇思妙想</NavLink>
                <NavLink to={"/login"} className={"navLink"}>关于</NavLink>
                <NavLink to={"/login"} className={"navLink"}>登录</NavLink>
            </div>;
    }
}
export default Head;
