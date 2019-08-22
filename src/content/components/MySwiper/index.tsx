import React from "react";
import './index.scss'

/*const SwiperImg = (p:{Img:string[]}) => {
    console.log("无状态组件-----------");
    const params = {
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: false
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        spaceBetween: 30
    };
    // @ts-ignore
    return <Swiper pagination={{el: '.swiper-pagination',type: 'bullets',clickable: true}}/!* navigation={ {nextEl: '.swiper-button-next',prevEl: '.swiper-button-prev'}}*!/
                   spaceBetween={30}
                   autoplay={true}
                   loop={true}
                   autoPlayDisableOnInteraction={false}
    >

        {p.Img.map((i:string,index:number)=>{
                return <div key={"imgl"+index} ><img style ={{width: '100%'}} src={i}/></div>
        })}
           {/!* <div><img src={"http://www2.flightclub.cn/news/uploads/allimg/190726/12-1ZH6154913-50.jpg"}/></div>
            <div><img src={"https://s4.51cto.com/oss/201809/02/c30bf49afb3760d54adb0c0cff8a9fee.jpeg-wh_651x-s_2300448790.jpeg"}/></div>
            <div><img src={"http://www2.flightclub.cn/news/uploads/allimg/190213/17-1Z213132I2.jpg"}/></div>
            <div><img src={"http://www2.flightclub.cn/news/uploads/allimg/190726/12-1ZH6162101.jpg"}/></div>
            <div><img src={"http://www2.flightclub.cn/news/uploads/allimg/190726/12-1ZH6154911.jpg"}/></div>*!/}
        </Swiper>;
};
export default SwiperImg*/

interface InterfaceProps {
    Img:string[]
}
class MySwiper extends React.Component<InterfaceProps,{ currentIndex:number}>{
    constructor(props: Readonly<InterfaceProps>){
        super(props)
        this.touchStart=this.touchStart.bind(this);
        this.touchMove=this.touchMove.bind(this);
        this.touchEnd=this.touchEnd.bind(this);
        this.autoPlay=this.autoPlay.bind(this);
        this.dotClick=this.dotClick.bind(this);
        this.timerFuc=this.timerFuc.bind(this);
        this.state={
            currentIndex:0
        }
    }
    componentDidMount(): void {
        this.autoPlay()
    }


    private touchStatus=0;//是否正在touch
    private pageX=0;//touch移动时的位置
    private oldPageX=0;//touch开始的位置
    private left=0;//初始left
    private to=0;//每次滑动移动了多少
    private index=0;//初始index
    private maxIndex=5;//最大数量
    private timer: any//定时器
    private timeout=3000
    touchStart(e:any){
        this.touchStatus=1;
        console.log("e",e.touches[0]);
        this.oldPageX=e.touches[0].pageX;
        let view=document.getElementById("view");
        let container=document.getElementById("container");
        if(container){
            if(container.style&&container.style.left){
                this.left=parseInt(container.style.left.replace("px",""))
            }
        }
    }
    touchMove(e:any){
        let view=document.getElementById("view");
        let container=document.getElementById("container");
        //console.log("container",container);
        this.pageX=e.touches[0].pageX;
        let to=this.pageX-this.oldPageX;
        console.log("to",to);
        this.to=to;
        if(container&&container.style){
              // console.log("container.style.left44",container.style.left);
                container.style.left=(this.left+to)+"px";
        }

    }
    touchEnd(){
       // alert(1)
        this.touchStatus=0
        let view=document.getElementById("view");
        let container=document.getElementById("container");
        if(container&&container.style){
            // 获取到所有的滑块元素
            const itemEls = container.querySelectorAll('.swiper-item');
            // 获取到滑块的宽度
            // @ts-ignore
            const itemWidth = itemEls[0].offsetWidth;
            console.log("itemWidth",itemWidth);
            console.log("itemWidth2",this.to);
            if(this.to<0){//如果向左滑动，则加this.index+1 ，则left =  container.style.left-itemWidth px
                this.index=this.index+1;
                if(this.index>=this.maxIndex){
                    this.index=this.maxIndex;
                }
                let left=0-itemWidth*this.index;
                console.log("this.left",this.left);
                container.style.left=left+"px"
            }else{////如果向右滑动，则加this.index-1
                this.index=this.index-1;
                if(this.index<=0){
                    container.style.left=0+"px"
                    this.index=0;
                }else{
                    let left=0-itemWidth*this.index;
                    container.style.left=left+"px"
                }


            }
            this.setState({
                currentIndex:this.index
            })
        }
    }
    autoPlay(){
        this.timer=setInterval(()=>{
            this.timerFuc();
        },3000);
    }
    timerFuc(){
        if(true){
            if(this.touchStatus===1){
                console.log("正在touching");
                return
            }
            else{
                let view=document.getElementById("view");
                let container=document.getElementById("container");
                if (container && container.style) {
                    // 获取到所有的滑块元素
                    const itemEls = container.querySelectorAll('.swiper-item');
                    // 获取到滑块的宽度
                    // @ts-ignore
                    const itemWidth = itemEls[0].offsetWidth;

                    this.setState({
                        currentIndex:this.index
                    });
                    let left = 0 - itemWidth * this.index;
                    console.log("this.index", this.index);
                    console.log("this.maxIndex", this.maxIndex);
                    console.log("left", left);
                    container.style.left = left + "px";
                    if (this.index === this.maxIndex-1) {
                        this.index = 0;
                    }else{
                        this.index = this.index + 1;
                    }
                }
            }
        }
    }
    dotClick(index:number){
        this.index=index;
        this.setState({
            currentIndex:index
        });
        let view=document.getElementById("view");
        let container=document.getElementById("container");
        if (container && container.style) {
            // 获取到所有的滑块元素
            const itemEls = container.querySelectorAll('.swiper-item');
            // 获取到滑块的宽度
            // @ts-ignore
            const itemWidth = itemEls[0].offsetWidth;
            let left = 0 - itemWidth * this.index;
            console.log("this.dot", this.index);
            container.style.left = left + "px"
        }
    }


    componentWillUnmount(): void {
        clearInterval(this.timer);
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
       const imgArr=this.props.Img;
       this.maxIndex=imgArr.length;
        let listItem=imgArr.map((item,index)=>{
            return <div className="swiper-item"  key={"swiperImg"+index}>
                <img className={"swiper-item-img"} src={item}/>
            </div>
        });

       let dotList=[];
       for(let i=0;i<=imgArr.length-1;i++){
           dotList.push(
               <div key={"dot"+i} className={this.state.currentIndex==i?"swiper-navigation-dot navigation-dot-selected":"swiper-navigation-dot" } onClick={()=>{this.dotClick(i)}}/>
           )
       }
        return <div>
            <div className="swiper" id="view">
                {/*容器 */}
                <div className="swiper-container" id={"container"} onTouchStart={this.touchStart} onTouchMove={this.touchMove} onTouchEnd={()=>{this.touchEnd()}}>
                    {/*滑块 */}
                    {listItem}
                    {/*
                     <div className="swiper-item" style={{background: "#d72a80"}}>1</div>
                    <div className="swiper-item" style={{background: "#4269eb"}}>2</div>
                    <div className="swiper-item" style={{background: "#247902"}}>3</div>
                    <div className="swiper-item" style={{background: "#d72a80"}}>4</div>
                    <div className="swiper-item" style={{background: "#4269eb"}}>5</div>
                    <div className="swiper-item" style={{background: "#247902"}}>6</div>
                    <div className="swiper-item" style={{background: "#d72a80"}}>7</div>
                    <div className="swiper-item" style={{background: "#4269eb"}}>8</div>
                    <div className="swiper-item" style={{background: "#247902"}}>9</div>*/}
                </div>
                <div className={"swiper-navigation"}>
                    {...dotList}
                  {/*
                    <div className={"swiper-navigation-dot"}></div>
                    <div className={"swiper-navigation-dot"}></div>
                    <div className={"swiper-navigation-dot"}></div>
                    <div className={"swiper-navigation-dot"}></div>*/}

                </div>
            </div>
        </div>;
    }
}
export default MySwiper
