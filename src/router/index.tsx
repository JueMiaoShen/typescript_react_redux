import * as React from 'react';
import {Route, Router} from 'react-router';
import * as History from "history";
import Article from "../container/Article";
import Login from "../container/Login";
import Home from "../container/Home";
import Head from "../content/components/Head";
import About from "../container/About";
import Study from "../container/Study";
import Think from "../container/Think";

class  MRouter extends React.Component{
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {

        return <Router history={History.createHashHistory()}>
            <Head/>
            <Route>
                <Route path={"/"} component={Home} exact/>
                <Route path={"/home"} component={Home} exact/>
                <Route path={"/article"} component={Article}/>
                <Route path={"/about"} component={About}/>
                <Route path={"/study"} component={Study}/>
                <Route path={"/think"} component={Think}/>
                <Route path={"/login"} component={Login}/>
            </Route>
        </Router>;
    }
}
export default MRouter;
