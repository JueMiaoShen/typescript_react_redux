import * as React from 'react';
import './input.css'
interface IInput {
    title?:string
    type?:string
    Mref:React.RefObject<any>;
}
class Input extends React.Component<IInput> {
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return <div>
                <span>{this.props.title}</span>
                <input type={this.props.type?this.props.type:'text'} ref={this.props.Mref} className={"input"}/>
            </div>;
    }
}
export default Input;
