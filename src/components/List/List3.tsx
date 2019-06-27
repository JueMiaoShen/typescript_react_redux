/*
* 没有嵌套关系的组件通信
*
*
* */

import * as React from "react";
import emit from "../../utils/emitter";
interface IProps {
    value: string,
    checked: boolean,
    onChange:()=>void
}


class List3Item extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (<li>
            <input type={'checkbox'} checked={this.props.checked} onChange={this.props.onChange}/>
            <span>{this.props.value}</span>
        </li>);
    }
}



interface IList3Props {
    title:string;
    list:{key:string,value:string,checked:boolean}[],

}

interface IList3State {
    list:{key:string,value:string,checked:boolean}[];
}
class List3 extends React.Component<IList3Props,IList3State>{
    constructor(props:IList3Props){
        super(props);
        this.state={
            list:this.props.list,
        };
    }
    onItemChange(entry:{key:string,value:string,checked:boolean}){
        const {list}=this.state;
        this.setState({
            list:list.map(item=>{return {key:item.key,value:item.value,checked:entry.key==item.key?!item.checked:item.checked}})
        });
        entry={key:entry.key,value:entry.value,checked:!entry.checked}


        emit.emit('ItemChange',entry);

    }
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (<div>
            <span>{this.props.title}</span>
            <ul>
                {this.state.list.map((entry,index)=>{
                    return <List3Item key={entry.key} value={entry.value} checked={entry.checked} onChange={this.onItemChange.bind(this,entry)}/>
                })}
            </ul>
        </div>);
    }
}

export default List3;
