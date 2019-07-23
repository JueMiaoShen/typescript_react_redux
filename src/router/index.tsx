import * as React from 'react';
import {Route, Router,} from 'react-router';
import * as History from "history";
import App from "../container/App";
import Login from "../container/Login";

class MRouter extends React.Component{
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return <Router history={History.createHashHistory()}>
            <Route path={"/"} >
                    <Route path={"/index"} component={App}/>
                    <Route path={"/login"} component={Login}/>
            </Route>

        </Router>;
    }
}
export default MRouter;
