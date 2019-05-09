import React from "react";
import SearchBar from "./SearchBar";
import axios from "axios";
import grad from 'gradient-from-image' 

class App extends React.Component {

  onSearchSubmit(term) {
    console.log(term);
    axios.get("http://api.tvmaze.com/singlesearch/shows", {
      params: { q: term, embed: "cast"}
    });
  }

  componentDidMount(){
    this.getGradient()
  }

  getGradient(){
    let url = "http://static.tvmaze.com/uploads/images/medium_portrait/41/104550.jpg";

    grad.gr(url).then(gr=>{
   
       console.log(gr)
       /*
       expected output
       {
           vibrant:array_Of_Hex,
           relevant:array_Of_Hex,
           getTextClr:string_Of Hex
       }
       */
       let bg = "linear-gradient(" +  gr.relevant + ")";
       let el = document.querySelector("body");
       el.style.background = bg;
    })
  }

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <div style={{ margin: "0px auto", padding: "30px" }}>
          <div className="ui grid" style={{}}>
            <div className="twelve wide column">
              <h1 style={{ color: "white", textTransform: "uppercase" }}>
                Friends |{" "}
                <span style={{ fontSize: "14px", verticalAlign: "middle" }}>
                  <i className="heart icon" style={{ color: "#ff6d75" }} />
                  4.3
                </span>
              </h1>
              <div
                style={{
                  minHeight: "220px",
                  fontSize: "20px",
                  lineHeight: "56pt"
                }}
              >
                <p>
                  Six young (20-something) people from New York City
                  (Manhattan), on their own and struggling to survive in the
                  real world, find the companionship, comfort and support they
                  get from each other to be the perfect antidote to the
                  pressures of life.
                </p>
                <p>
                  This average group of buddies goes through massive mayhem,
                  family trouble, past and future romances, fights, laughs,
                  tears and surprises as they learn what it really means to be a
                  friend.
                </p>
                <div className="ui grid">
                  <div className="four wide column">
                    <h3 className="ui header">
                      <i className="large icons">
                        <i className="language icon" />
                      </i>
                      English
                    </h3>
                  </div>
                  <div className="four wide column">
                    <h3 className="ui header">
                      <i className="large icons">
                        <i className="film icon" />
                      </i>
                      Comedy, Romantic
                    </h3>
                  </div>

                  <div className="four wide column">
                    <h3 className="ui header">
                      <i className="large icons">
                        <i className="calendar alternate icon" />
                      </i>
                      20:00, Thursday
                    </h3>
                  </div>

                  <div className="four wide column">
                    <h3 className="ui header">
                      <i className="large icons">
                        <i className="circle icon" />
                      </i>
                      Running
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="four wide column"
              style={{
                display: "table-cell",
                textAlign: "center",
                verticalAlign: "middle"
              }}
            >
              <img src="http://static.tvmaze.com/uploads/images/medium_portrait/41/104550.jpg" style={{boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)"}} />
            </div>
          </div>
          <div className="fifteen wide column">
          <h1>Main Cast</h1>
            <div className="ui six column grid">
              <div className="column">
                <div className="ui fluid card">
                  <div className="image">
                    <img src="/images/avatar/large/daniel.jpg" />
                  </div>
                  <div className="content">
                    <a className="header">Daniel Louise</a>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="ui fluid card">
                  <div className="image">
                    <img src="/images/avatar/large/helen.jpg" />
                  </div>
                  <div className="content">
                    <a className="header">Helen Troy</a>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="ui fluid card">
                  <div className="image">
                    <img src="/images/avatar/large/elliot.jpg" />
                  </div>
                  <div className="content">
                    <a className="header">Elliot Fu</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
      </div>
    );
  }
}

export default App;
