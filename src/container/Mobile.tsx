import * as React from 'react';
import Pager from "../content/components/Pager";
import Div from "../content/components/Div";

class Mobile extends React.Component {

    constructor(props: any) {
        super(props);
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return <Pager>
            <Div/>
        </Pager>
    }
}

export default Mobile;
