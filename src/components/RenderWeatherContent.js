import React from "react";
import WeatherCard from "./WeatherCard";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";

class RenderWeatherContent extends React.Component {
    renderContent() {
        if (this.props.isLoading) {
            return <CircularProgress />;
        } else {
            if (this.props.err) {
                return (
                    <Alert severity="warning">
                        Unknown location or empty field
                    </Alert>
                );
            }
            return this.props.forecast.map((day, i) => {
                return (
                    <div key={i}>
                        <WeatherCard day={day} location={this.props.location} />
                    </div>
                );
            });
        }
    }

    render() {
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-around",
                    marginTop: "15px",
                }}
            >
                {this.renderContent()}
            </div>
        );
    }
}

export default RenderWeatherContent;
