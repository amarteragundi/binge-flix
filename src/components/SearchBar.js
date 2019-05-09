import React from "react";

class SearchBar extends React.Component {
    state={term: ""}
  render() {
    return (
      <div id="searchBar">
        <form>
        <div className="ui massive fluid action input">
            <input type="text" value={this.state.term} placeholder="Search..." onchange={(e) => this.setState({term: e.target.value})} />
            <div className="ui button">Search</div>
        </div>
          </form>
      </div>
    );
  }
}

export default SearchBar;
