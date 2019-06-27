import * as React from 'react'
class Pager extends React.Component{
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return <div style={{background:"red",width:"100%",height:"100%"}}>
            {this.props.children}
        </div>;
    }
}
export default Pager;
