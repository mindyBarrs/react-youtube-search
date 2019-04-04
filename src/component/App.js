import React from "react";

/* COMPONENTS */
import SearchBar from "./SearchBar/SearchBar";
import VideoList from "./VideoList/VideoList";
import VideoDetail from "./VideoDetail/VideoDetail";

/* API */
import youtube from "../apis/youtube";

class App extends React.Component {
    state = {
        videos: [],
        selectedViceo: null
    }

    onTermSubmit = async term => {
        const response = await youtube.get("/search", {
            params: {
                q: term
            }
        });

        this.setState({
            videos: response.data.items
        });
    };

    onVideoSelect = ( video ) => {
        console.log("from the app", video);
    }

    render() {
        return(
            <div className="ui container">
                <SearchBar onFormSubmit={ this.onTermSubmit } />

                <VideoList onVideoSelect={ this.onVideoSelect } videos={ this.state.videos } />

                <VideoDetail />
            </div>
        );
    }
}

export default App;