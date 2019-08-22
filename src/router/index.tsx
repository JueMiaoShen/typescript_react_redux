import * as React from 'react';
import {Route, Router, Switch} from 'react-router';
import * as History from "history";
import Article from "../container/Article";
import Login from "../container/Login";
import Home from "../container/Home";
import About from "../container/About";
import Study from "../container/Study";
import Think from "../container/Think";
import Sport from "../container/Sport";
import Mobile from "../container/Mobile";
import Head from "../content/components/Head";


/*
* https://reacttraining.com/react-router/web/api/Route/exact-bool
* exact: bool
When true, will only match if the path matches the location.pathname exactly.<Route exact path="/one" component={About} />
path	location.pathname	exact	matches?
/one	/one/two	true	no
/one	/one/two	false	yes
strict: bool
When true, a path that has a trailing slash will only match a location.pathname with a trailing slash. This has no effect when there are additional URL segments in the location.pathname.<Route strict path="/one/" component={About} />
path	location.pathname	matches?
/one/	/one	no
/one/	/one/	yes
/one/	/one/two	yesWarning: strict can be used to enforce that a location.pathname has no trailing slash, but in order to do this both strict and exact must be true.<Route exact strict path="/one" component={About} />
path	location.pathname	matches?
/one	/one	yes
/one	/one/	no
/one	/one/two	no
* */

class MRouter extends React.Component {
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return <Router history={History.createHashHistory()}>
            <Switch>
                <Route path={"/"} component={Home} exact/>
                <Route path={"/web"} strict={true} component={Web}/>
                <Route path={"/mobile"} strict={true} component={Phone}/>
            </Switch>
        </Router>;
    }
}

const Web = () => {
    return <div>
        <Head/>
        <Switch>
            <Route path={"*/home"} component={Home}/>
            <Route path={"*/article"} component={Article}/>
            <Route path={"*/about"} component={About}/>
            <Route path={"*/sport"} component={Sport}/>
            <Route path={"*/study"} component={Study}/>
            <Route path={"*/think"} component={Think}/>
            <Route path={"*/login"} component={Login}/>
            <Route path={"*/"} component={Home} exact={true}/>

        </Switch>
    </div>

};
const Phone = () => {
    return <Switch>
        <Route path={"*/phone"} component={Mobile}/>
        <Route path={"*/"} component={Mobile} exact={true}/>
    </Switch>
};
export default MRouter;
