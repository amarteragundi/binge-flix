import React from "react";
import SearchBar from "./SearchBar";
import axios from "axios";

class App extends React.Component {
  onSearchSubmit(term) {
    console.log(term);
    axios.get("http://api.tvmaze.com/singlesearch/shows", {
      params: { q: term }
    });
  }

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <div style={{ margin: "0px auto", padding: "30px" }}>

          <div className="ui grid" style={{}}>
            <div
              className="four wide column"
              style={{
                display: "table-cell",
                textAlign: "center",
                verticalAlign: "middle"
              }}
            >
              <img src="http://static.tvmaze.com/uploads/images/medium_portrait/41/104550.jpg" />
            </div>
            <div className="twelve wide column">
              <h1 style={{ color: "white", textTransform: "uppercase" }}>
                Friends |{" "}
                <span style={{ fontSize: "14px", verticalAlign: "middle" }}>
                  <i className="heart icon" style={{"color":"#ff6d75"}} />
4.3
                </span>
                <p style={{ fontSize: "12px" }}>
                  Six young (20-something) people from New York City
                  (Manhattan), on their own and struggling to survive in the
                  real world, find the companionship, comfort and support they
                  get from each other to be the perfect antidote to the
                  pressures of life.
                </p>
                <p style={{ fontSize: "12px" }}>
                  This average group of buddies goes through massive mayhem,
                  family trouble, past and future romances, fights, laughs,
                  tears and surprises as they learn what it really means to be a
                  friend.
                </p>
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
