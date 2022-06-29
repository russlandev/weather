import React from "react";
import axios from "axios";
import RenderWeatherContent from "./RenderWeatherContent";
import SearchBar from "./SearchBar";
import EveryHourTemp from "./EveryHourTemp";

class App extends React.Component {
    state = { forecast: [], location: "", err: "", isLoading: false };

    onSearchSubmit = async (location) => {
        try {
            this.setState({ isLoading: true });
            const response = await axios.get(
                "http://api.weatherapi.com/v1/forecast.json",
                {
                    params: {
                        key: "a31cc6753bc646d9af3212013221806",
                        q: location,
                        days: 3,
                    },
                }
            );
            this.setState({
                forecast: response.data.forecast.forecastday,
                location: `${response.data.location.country}, ${response.data.location.region}, ${response.data.location.name}`,
                isLoading: false,
                err: "",
            });
            window.localStorage.setItem(
                "location",
                `${response.data.location.country}, ${response.data.location.region}, ${response.data.location.name}`
            );
        } catch (err) {
            this.setState({
                forecast: [],
                location: "",
                isLoading: false,
                err: err,
            });
        }
    };

    render() {
        return (
            <div>
                <SearchBar
                    location={this.state.location}
                    onSubmit={this.onSearchSubmit}
                />
                {!!this.state.forecast.length && (
                    <EveryHourTemp forecast={this.state.forecast} />
                )}
                <RenderWeatherContent
                    location={this.state.location}
                    forecast={this.state.forecast}
                    err={this.state.err}
                    isLoading={this.state.isLoading}
                />
            </div>
        );
    }
}

export default App;
