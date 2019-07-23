import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configStore from "./store";
import MRouter from "./router";
import "./index.scss"
ReactDOM.render(
    <Provider store={configStore()}>
        <MRouter/>
    </Provider>,
    document.getElementById('aiq')
);
