import React from "react";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import Fab from "@mui/material/Fab";

class CurrentPositionButton extends React.Component {
    state = { lat: null, long: null, errMsg: "" };

    getPosition = () => {
        window.navigator.geolocation.getCurrentPosition(
            (position) =>
                this.props.onButtonClick(
                    `${position.coords.latitude},${position.coords.longitude}`
                ),
            (err) => alert(err.message)
        );
    };

    componentDidMount() {
        if (!window.localStorage.getItem("location")) this.getPosition();
    }

    render() {
        return (
            <div style={{ margin: "20px" }} onClick={this.getPosition}>
                <Fab variant="extended" size="large">
                    <LocationSearchingIcon />
                    NAVIGATE
                </Fab>
            </div>
        );
    }
}

export default CurrentPositionButton;
