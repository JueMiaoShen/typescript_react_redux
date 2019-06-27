/*
* 子组件向父组件传值
*  1、回调传值：通过props
*  2、利用自定义事件
*
* */

import * as React from 'react'

interface IProps {
    value: string,
    checked: boolean,
    onChange: () => void
}


class List2Item extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (<li>
            <input type={'checkbox'} checked={this.props.checked} onChange={this.props.onChange}/>
            <span>{this.props.value}</span>
        </li>);
    }
}


interface IList2Props {
    title: string;
    list: { key: string, value: string, checked: boolean }[],
    handleItemChange: (entry: { key: string, value: string, checked: boolean }) => void
}

interface IList2State {
    list: { key: string, value: string, checked: boolean }[];
}

class List2 extends React.Component<IList2Props, IList2State> {
    constructor(props: IList2Props) {
        super(props);
        this.state = {
            list: this.props.list,
        };
    }

    onItemChange(entry: { key: string, value: string, checked: boolean }) {
        const {list} = this.state;
        this.setState({
            list: list.map(item => {
                return {key: item.key, value: item.value, checked: entry.key == item.key ? !item.checked : item.checked}
            })
        });
        entry = {key: entry.key, value: entry.value, checked: !entry.checked};
        this.props.handleItemChange(entry)
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (<div>
            <span>{this.props.title}</span>
            <ul>
                {this.state.list.map((entry, index) => {
                    return <List2Item key={entry.key} value={entry.value} checked={entry.checked}
                                      onChange={this.onItemChange.bind(this, entry)}/>
                })}
            </ul>
        </div>);
    }
}

export default List2;
