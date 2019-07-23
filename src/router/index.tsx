import * as React from 'react';
import {Route, Router} from 'react-router';
import * as History from "history";
import App from "../container/App";
import Login from "../container/Login";
import Home from "../container/Home";
import Head from "../content/components/Head";

class  MRouter extends React.Component{
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {

        return <Router history={History.createHashHistory()}>
            <Head/>
            <Route>
                <Route path={"/"} component={Home} exact/>
                <Route path={"/home"} component={Home} exact/>
                <Route path={"/index"} component={App}/>
                <Route path={"/login"} component={Login}/>
            </Route>
        </Router>;
    }
}
export default MRouter;
