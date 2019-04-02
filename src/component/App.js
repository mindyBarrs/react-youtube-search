import React from "react";

/* COMPONENTS */
import SearchBar from "./SearchBar/SearchBar"

class App extends React.Component {
    render() {
        return(
            <div className="ui container">
                <SearchBar />
            </div>
        );
    }
}

export default App;