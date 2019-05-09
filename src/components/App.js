import React from "react";
import SearchBar from "./SearchBar";
import axios from "axios";

class App extends React.Component {
  onSearchSubmit(term) {
    console.log(term);
    axios.get('http://api.tvmaze.com/singlesearch/shows',{
        params: {q: term}
    });
  }

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
