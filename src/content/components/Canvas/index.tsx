import * as React from "react";

interface IProps {

}

interface IState {

}


class MyCanvas extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state={}
    }

    componentDidMount(): void {
        // @ts-ignore
        let ctx=document.getElementById("Canvas").getContext('2d');
       // ctx.fillRect(10,10,100,100);//实心矩阵
        ctx.strokeRect(10,10,150,150);//空心矩阵
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {

            return (
                <div>
                    <canvas id={"canvas"} height={200} width={200}>
                        your browser doesn't support the <code>canvas</code> element
                    </canvas>
                </div>
            )
    }

}

export default MyCanvas;
