import React from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <div id="searchBar">
        <form>
        <div className="ui massive fluid action input">
            <input type="text" placeholder="Search..." />
            <div className="ui button">Search</div>
        </div>
          </form>
      </div>
    );
  }
}

export default SearchBar;
