import React from "react";
import SearchBar from "./SearchBar";
import axios from 'axios'

class App extends React.Component {

    onSearchSubmit(term){
        console.log(term);

//         <div className="ui card">
//   <a className="image" href="#">
//     <img src="/images/avatar/large/steve.jpg" />
//   </a>
//   <div className="content">
//     <a className="header" href="#">Steve Jobes</a>
//     <div className="meta">
//       <a>Last Seen 2 days ago</a>
//     </div>
//   </div>
// </div>

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
