import * as React from 'react';
import {connect} from "react-redux";
import {MLocation} from "../../store/types";
import {getLocation} from "../../store/actions/location";
import baiduLocation from "../../utils/baidu";
import {ak} from "../../config/config";


interface InterfaceProps {
    lat: string,
    lng: string,
    setLocation: (l: MLocation) => void
}


class MyLocation extends React.Component<InterfaceProps, {}> {
    constructor(props: InterfaceProps) {
        super(props)
    }

    componentDidMount(): void {
        this.getLocationData();
    }

    getLocationData() {
        setInterval(() => {
            baiduLocation(ak, (result: any) => {
                console.log('baidu:', result.latitude, result.longitude);
                this.props.setLocation({lat: result.latitude, lng: result.longitude});
            })
        }, 5000)
    }


    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return <div>
            Lat:{this.props.lat}
            Lng:{this.props.lng}
        </div>;
    }
}

function mapStateToProps(state: { location: MLocation }) {
    return {
        lat: state.location.lat,
        lng: state.location.lng,
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
        setLocation: (s: MLocation) => dispatch(getLocation(s)),
    }
}

const Location = connect(
    mapStateToProps,
    mapDispatchToProps
)(MyLocation);

export default Location
