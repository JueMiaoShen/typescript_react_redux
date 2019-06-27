import * as React from "react";

interface IProps {
    promise: Promise<any>
}

interface IState {
    loading: boolean,
    error: any,
    value: any,
}


class CommentsList extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            loading: true,
            error: null,
            value: null

        }
    }

    componentDidMount(): void {
        console.log(this.props.promise);
        this.props.promise.then(response => response.json())
            .then(value => this.setState({loading: false, value}))
            .catch(error => {
                this.setState({loading: false, error})
            })
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        console.log(this.state.loading);

        {
            if (this.state.loading) {
                return (<span>loading...</span>)
            } else if (this.state.error !== null) {
                return (<span>Error:{this.state.error.message}</span>)
            } else {
                const list = this.state.value.commentList;
                return (<ul>
                        {list.map((entry: any, i: any) => {
                            return (<li key={`reponse-${i}`}>
                                <p>{entry.name}</p>
                                <p>{entry.content}</p>
                                <p>{entry.publishTime}</p>
                            </li>)
                        })}
                    </ul>
                )
            }
        }
    }

}

export default CommentsList;
