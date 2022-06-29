import React from "react";
import Fab from "@mui/material/Fab";
import { Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";

class EveryHourTemp extends React.Component {
    state = { day: 0, date: "" };

    getDate = (date) => {
        return new Date(date).toLocaleString("en", {
            weekday: "long",
            month: "long",
            day: "numeric",
        });
    };

    stateIncr = () => {
        if (this.state.day < this.props.forecast.length - 1) {
            this.setState({ day: this.state.day + 1 });
        } else {
            this.setState({ day: 0 });
        }
    };

    stateDecr = () => {
        if (this.state.day > 0) {
            this.setState({ day: this.state.day - 1 });
        } else {
            this.setState({ day: this.props.forecast.length - 1 });
        }
    };

    render() {
        return (
            <React.Fragment>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Fab
                        onClick={this.stateDecr}
                        sx={{ mr: "20px" }}
                        size="medium"
                    >
                        <ArrowBackIcon />
                    </Fab>
                    <Typography
                        sx={{ width: "250px", textAlign: "center" }}
                        variant="h5"
                        component="div"
                    >
                        {this.getDate(this.props.forecast[this.state.day].date)}
                    </Typography>
                    <Fab
                        onClick={this.stateIncr}
                        sx={{ ml: "20px" }}
                        size="medium"
                    >
                        <ArrowForwardIcon />
                    </Fab>
                </div>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    {this.props.forecast[this.state.day].hour.map((hour, i) => {
                        return (
                            <div key={i}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        mb: "10px",
                                        mt: "20px",
                                        width: 55,
                                        height: 200,
                                    }}
                                >
                                    <Typography
                                        sx={{ mb: "10px" }}
                                        variant="subtitle1"
                                        component="div"
                                    >
                                        {hour.time.slice(-5)}
                                    </Typography>
                                    <Slider
                                        aria-label="Temperature"
                                        orientation="vertical"
                                        value={hour.temp_c}
                                        valueLabelDisplay="auto"
                                        min={
                                            this.props.forecast[this.state.day]
                                                .day.mintemp_c - 3
                                        }
                                        max={
                                            this.props.forecast[this.state.day]
                                                .day.maxtemp_c + 3
                                        }
                                        color="secondary"
                                    />
                                    <Typography
                                        sx={{ mb: "10px" }}
                                        variant="subtitle2"
                                        component="div"
                                    >
                                        {hour.temp_c}°C
                                    </Typography>
                                </Box>
                            </div>
                        );
                    })}
                </div>
            </React.Fragment>
        );
    }
}

export default EveryHourTemp;
