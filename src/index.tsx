import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from "./App";
import {Provider} from 'react-redux';
import configStore from "./store";

ReactDOM.render(
    <Provider store={configStore()}>
        <App/>
    </Provider>,
    document.getElementById('aiq')
);
