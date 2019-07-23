import * as React from 'react';
import ListItem from "./ListItem";

interface IProps {
    title: string;
    list: { key: string, value: string }[]
}

/*
* 父组件通过props向子组件传值
* */
class List extends React.Component<IProps, {}> {
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const {title, list} = this.props;

        return (<div>
            <span>{title}</span>
            <ul>
                {
                    list.map((item, index) => {
                        return <ListItem key={item.key} value={item.value}/>
                    })
                }
            </ul>
        </div>);
    }
}

export default List
