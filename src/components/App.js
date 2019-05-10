import React from "react";
import SearchBar from "./SearchBar";
import axios from "axios";
import imageToGradient from "image-to-gradient";

import TitleandRating from "./TitleandRating";
import ShowDescription from "./showDescription";
import OtherDetails from "./OtherDetails";
import Cast from "./Cast";
import MyState from './State';

class App extends React.Component {
    state = MyState;
 onSearchSubmit = async (term) => {
        console.log(term);
        const response = await axios.get("http://api.tvmaze.com/singlesearch/shows", {
            params: { q: term, embed: "cast" }
        });

        this.setState({response: response.data});
        console.log(this.state);
    
    }

    componentDidMount() {
        this.getGradient();
    }

    getGradient() {
        let url =
            "http://static.tvmaze.com/uploads/images/medium_portrait/167/418419.jpg";
        let options = {
            angle: 0, // gradient angle in degrees
            steps: 5 // number of steps
        };

        imageToGradient(url, options, function(err, cssGradient) {
            console.log(cssGradient);
            let el = document.querySelector("body");
            el.style.background = cssGradient;
        });
    }

    render() {
        return (
            <div>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <div style={{ margin: "0px auto", padding: "30px" }}>
                    <div className="ui grid" style={{}}>
                        <div className="twelve wide column">
                            <TitleandRating title="Friends" rating="9.8" />
                            <div
                                style={{
                                    minHeight: "220px",
                                    fontSize: "20px",
                                    lineHeight: "56pt"
                                }}
                            >
                                <ShowDescription
                                    description={`<p>After a particle accelerator causes a freak storm, CSI Investigator Barry Allen is struck by lightning and falls into a coma. Months later he awakens with the power of super speed, granting him the ability to move through Central City like an unseen guardian angel. Though initially excited by his newfound powers, Barry is shocked to discover he is not the only "meta-human" who was created in the wake of the accelerator explosion -- and not everyone is using their new powers for good. Barry partners with S.T.A.R. Labs and dedicates his life to protect the innocent. For now, only a few close friends and associates know that Barry is literally the fastest man alive, but it won't be long before the world learns what Barry Allen has become...The Flash!</p>`}
                                />
                                <div
                                    className="ui grid"
                                    style={{ marginTop: "30px" }}
                                >
                                    <OtherDetails
                                        icon="language"
                                        content="English"
                                    />
                                    <OtherDetails
                                        icon="film"
                                        content="Comedy, Romantic"
                                    />
                                    <OtherDetails
                                        icon="calendar outline"
                                        content="20:00, Thursday"
                                    />
                                    <OtherDetails
                                        icon="circle"
                                        content="Running"
                                    />
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
                            <img
                                src="http://static.tvmaze.com/uploads/images/medium_portrait/167/418419.jpg"
                                style={{
                                    boxShadow:
                                        "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)"
                                }}
                            />
                        </div>
                    </div>
                    <div className="sixteen wide column">
                        <h1>Main Cast</h1>
                        <div className="ui six column grid">
                            <Cast
                                img="http://static.tvmaze.com/uploads/images/medium_portrait/95/239388.jpg"
                                charName="Bartholomew Henry 'Barry' Allen / The Flash"
                                name="Grant Gustin"
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
