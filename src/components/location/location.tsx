import * as React from 'react';
import {asyncInc} from "../../store/actions";
import {connect} from "react-redux";
import HomePage from "../homePage";
import {MLocation} from "../../store/types";
import {getLocation} from "../../store/actions/location";

interface InterfaceProps {
    lat: string,
    lng: string
}

class MyLocation extends React.Component<InterfaceProps, {}> {
    constructor(props: InterfaceProps) {
        super(props)
    }

    componentDidMount(): void {
        this.getLocationData();
    }

    getLocationData() {

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
