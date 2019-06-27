import * as React from 'react';
import Counter from "./components/counter";
import {asyncInc} from "./store/actions";
import {connect} from "react-redux";
import {DECREMENT, INCREMENT} from "./store/types";

function mapStateToProps(state: {counter:{ num: any;asyncNum:number }}) {
    console.log('state.num',state.counter.num);
    console.log('state.asyncNum',state.counter.asyncNum);
    console.log('state',state);
    return {
        value: state.counter.num,
        value1: state.counter.asyncNum,
    }
}

function mapDispatchToProps(dispatch:any) {
   // console.log(dispatch);
    return {
        onIncreaseClick: () => dispatch(asyncInc()),
        DECREMENT: () => dispatch({type:'DECREMENT'}),
        INCREMENT: () => dispatch({type:'INCREMENT'}),
    }
}
const  App = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);
export default App;
