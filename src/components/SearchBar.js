import React from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <div className="ui action input">
          <input type="text" placeholder="Search..." />
          <button className="ui button">Search</button>
        </div>
      </div>
    );
  }
}

export default SearchBar;
