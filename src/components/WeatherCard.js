import React from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Divider from "@mui/material/Divider";
import { Card, CardContent, Typography } from "@mui/material";

class WeatherCard extends React.Component {
    getDate = (date) => {
        return new Date(date).toLocaleString("en", {
            weekday: "long",
            month: "long",
            day: "numeric",
        });
    };

    render() {
        return (
            <div>
                <Card sx={{ maxWidth: 345 }}>
                    <CardContent>
                        <Typography
                            sx={{ fontSize: 14, mb: 1.5 }}
                            color="text.secondary"
                            gutterBottom
                        >
                            {this.props.location}
                        </Typography>
                        <Typography
                            sx={{ mb: 1.5 }}
                            variant="h5"
                            component="div"
                        >
                            {this.getDate(this.props.day.date)}
                        </Typography>
                        <Divider />
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                            }}
                        >
                            <Typography
                                sx={{ mb: 1.5, mt: 1.5 }}
                                color="text.secondary"
                            >
                                {this.props.day.day.condition.text}
                                <br />
                                Wind: {this.props.day.day.maxwind_kph} kph
                                <br />
                                UV index: {this.props.day.day.uv}/12
                            </Typography>
                            <img
                                alt="img"
                                style={{ height: "64px" }}
                                src={this.props.day.day.condition.icon}
                            ></img>
                        </div>
                        <Typography variant="h4" component="div">
                            <LightModeIcon /> {this.props.day.day.maxtemp_c}°C /{" "}
                            {this.props.day.day.mintemp_c}°C <DarkModeIcon />
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default WeatherCard;
