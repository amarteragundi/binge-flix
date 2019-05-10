import React from "react";
import SearchBar from "./SearchBar";
import axios from "axios";
import imageToGradient from "image-to-gradient";

import TitleandRating from "./TitleandRating";
import ShowDescription from "./showDescription";
import OtherDetails from "./OtherDetails";
import Cast from './Cast';

class App extends React.Component {
    onSearchSubmit(term) {
        console.log(term);
        axios.get("http://api.tvmaze.com/singlesearch/shows", {
            params: { q: term, embed: "cast" }
        });
    }

    componentDidMount() {
        this.getGradient();
    }

    getGradient() {
        let url =
            "http://static.tvmaze.com/uploads/images/medium_portrait/165/414895.jpg";
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
                                    description="<p>
    Six young (20-something) people from New
    York City (Manhattan), on their own and
    struggling to survive in the real world,
    find the companionship, comfort and support
    they get from each other to be the perfect
    antidote to the pressures of life.
</p>
<p>
    This average group of buddies goes through
    massive mayhem, family trouble, past and
    future romances, fights, laughs, tears and
    surprises as they learn what it really means
    to be a friend.
</p>"
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
                                        icon="calendar"
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
                                src="http://static.tvmaze.com/uploads/images/medium_portrait/165/414895.jpg"
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
                        <Cast img="http://static.tvmaze.com/uploads/images/medium_portrait/165/414895.jpg" charName="Arrow" name="Arrow" />
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
