import * as React from 'react'
class Pager extends React.Component{
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return <div className={"page"}>{this.props.children}</div>;
    }
}
export default Pager;
