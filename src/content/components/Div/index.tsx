import React from "react";
import './index.scss'
interface InterfaceProps {

}
class Div extends React.Component<InterfaceProps,{ currentIndex:number}>{
    constructor(props: Readonly<InterfaceProps>){
        super(props)

    }
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {

        return  <div>
                        <img src={"http://pic1.win4000.com/wallpaper/0/589925ce681be.jpg"}/>
                </div>;
    }
}
export default Div
