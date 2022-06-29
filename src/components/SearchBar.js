import React from "react";
import { TextField, Container, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import CurrentPositionButton from "./CurrentPositionButton";

class SearchBar extends React.Component {
    state = { term: "" };

    onFormSubmit = async (term, e) => {
        if (e) e.preventDefault();
        await this.props.onSubmit(term);
        this.setState({term: this.props.location});
    };

    componentDidMount() {
        if (window.localStorage.getItem('location')) {
            this.onFormSubmit(window.localStorage.getItem('location'));
        }
    }

    render() {
        return (
            <div>
                <Container maxWidth="md">
                    <form
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                        onSubmit={(e) => this.onFormSubmit(this.state.term, e)}
                    >
                        <TextField
                            fullWidth={true}
                            id="outlined-basic"
                            label="Search"
                            variant="outlined"
                            onChange={(e) =>
                                this.setState({ term: e.target.value })
                            }
                            type="text"
                            value={this.state.term}
                        >
                        </TextField>
                        <div style={{margin: '20px'}}>
                            <IconButton type="submit" sx={{ p: '15px' }} aria-label="search">
                                <SearchIcon/>
                            </IconButton>
                        </div>
                        <CurrentPositionButton
                            onButtonClick={this.onFormSubmit}
                        />
                    </form>
                </Container>
            </div>
        );
    }
}

export default SearchBar;
