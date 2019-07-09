import * as React from "react";
interface IProps {
    type:string,
    InputRef:React.RefObject<any>,
    title:string,
    name:string
}
class MInput extends React.Component<IProps,{}> {
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return <div>
            <span>{this.props.title}</span>
            <input name={this.props.name} type={this.props.type} ref={this.props.InputRef}/>
        </div>
    }
}
export default MInput;
