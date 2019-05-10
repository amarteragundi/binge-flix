import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (event) => {
      event.preventDefault();
      this.props.onSubmit(this.state.term)
  }

  render() {
    return (
      <div id="searchBar">
        <form onSubmit={this.onFormSubmit}>
          <div className="ui massive fluid input">
            <input
              type="text"
              value={this.state.term}
              placeholder="type tv show name and press enter ..."
              onChange={e => this.setState({ term: e.target.value.toUpperCase() })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
