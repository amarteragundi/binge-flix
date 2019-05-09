import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit(event){
      event.preventDefault();
      console.log(this.state.term)
  }

  render() {
    return (
      <div id="searchBar">
        <form onSubmit={this.onFormSubmit.bind(this)}>
          <div className="ui massive fluid action input">
            <input
              type="text"
              value={this.state.term}
              placeholder="Search..."
              onChange={e => this.setState({ term: e.target.value })}
            />
            <div className="ui button">Search</div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
