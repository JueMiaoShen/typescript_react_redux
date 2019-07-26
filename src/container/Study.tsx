import * as React from 'react';
import Pager from "../content/components/Pager";
// @ts-ignore
import Editor from 'for-editor'
// @ts-ignore
import Markdown from 'markdown'

class Study extends React.Component<{}, { value: any }> {
    private myUsernameRef: React.RefObject<any>;
    private myPasswordRef: React.RefObject<any>;

    constructor(props: any) {
        super(props);
        this.myUsernameRef = React.createRef();
        this.myPasswordRef = React.createRef();
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            value: ''
        }
    }

    componentDidMount(): void {
        console.log(this.myUsernameRef);
        console.log(this.myPasswordRef);
    }

    handleChange(value: any) {
        console.log(value);
        this.setState({
            value
        })
    }

    handleOnSave() {
        console.log(this.state.value);
        console.log(Markdown.markdown.toHTML(this.state.value));
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const {value} = this.state;
        return <Pager>
            <div className={"studyTitle"}><input className={""} placeholder={"请输入文章标题"}/>
                <button>发布文章</button>
                <div><img src={'https://avatar.csdn.net/E/B/E/3_qq_26540693.jpg'}></img></div>
            </div>
            <Editor value={value} onChange={(v: any) => {
                this.handleChange(v)
            }} subfield={"true"} lineNum={true} style={{borderRadius: '0px', height: '86vh'}} language={true}
                    height={"86vh"} onSave={() => {
                this.handleOnSave()
            }}/>
        </Pager>
    }
}

export default Study;
