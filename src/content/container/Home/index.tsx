import * as React from 'react'
import Pager from "../../components/Pager";
import Swiper from "../../components/Swiper";
class Home extends React.Component{
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return <Pager>
                        <Swiper/>
               </Pager>
    }
}
export default Home;
