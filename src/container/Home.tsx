import * as React from 'react';
import {asyncInc} from "../store/actions";
import {connect} from "react-redux";
import Home1 from "../content/container/Home"

function mapStateToProps(state:any) {
    console.log('state',state);
    return state
}

function mapDispatchToProps(dispatch:any) {
    return {}
}
const  Home = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home1);

export default Home;
