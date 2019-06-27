import * as React from 'react';

interface IProps {
    value: any;
    key?: string
}

class ListItem extends React.Component<IProps, {}> {

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
                <li>
                    <span>{this.props.value}</span>
                </li>
            )
    }
}

export default ListItem
