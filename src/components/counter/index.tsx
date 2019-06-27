import * as React from 'react';
import {INCREMENT} from "../../store/types";
import List from "../List/List";
import List2 from "../List/List2";
import List3 from "../List/List3";
import emit from "../../utils/emitter";
import CommentsList from "../commentList/commentsList";
import {asyncInc} from "../../store/actions";

interface Iprops {
    value:number,
    value1:number,
    onIncreaseClick:()=>void,
    INCREMENT:()=>void,
    DECREMENT:()=>void,
}
interface IState {
    list:{
        key:string,
        value:string
    }[],
    list2:{
        key:string,
        value:string,
        checked:boolean,
    }[],
}
export default class Counter extends React.Component<Iprops,IState>{
    constructor(props:Iprops){
        super(props);
        this.state={
            list:[
                {key:'test1',value:'TEST1'} ,
                {key:'test2',value:'TEST2'} ,
                {key:'test3',value:'TEST3'} ,
                {key:'test4',value:'TEST4'} ,
                {key:'test5',value:'TEST5'}
            ],
            list2:[
                {key:'l1',value:'T1',checked:false} ,
                {key:'l2',value:'TT2',checked:false} ,
                {key:'l3',value:'TET3',checked:false} ,
                {key:'l4',value:'TET4',checked:false} ,
                {key:'l5',value:'TEST5',checked:false}
            ]
        }
    }
    handleItemChange(item:{key:string,value:string,checked:boolean}){
        console.log(item);
        alert(item.key+' '+item.checked)
    }
    itemChange:any='';

    componentWillMount(): void {
        this.itemChange=emit.on('ItemChange',(data:{key:string,value:string,checked:boolean})=>{
            console.log(data);
            alert(data.key+' '+data.checked)
        })
    }
    componentDidMount(): void {
        emit.removeListener('ItemChange',()=>{
            console.log('删除ItemChange');
        });
    }


    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const {list,list2}=this.state;
        return (<div>

            <CommentsList promise={fetch('./response.json')}/>

             <List title={'你大爷'} list={list}/>
             <List2 title={'二大爷'} list={list2} handleItemChange={this.handleItemChange.bind(this)}/>
             <List3 title={'三大爷'} list={list2}/>

            <span>值：{this.props.value}</span><br/>
            <span>值：{this.props.value1}</span><br/>
            <button onClick={this.props.onIncreaseClick}>asyncInc</button><br/>
            <button onClick={this.props.INCREMENT}>INCREMENT</button><br/>
            <button onClick={this.props.DECREMENT}>DECREMENT</button>

        </div>);
    }
}
