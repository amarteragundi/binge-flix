import React from "react";
import SearchBar from "./SearchBar";
import tvmaze from "../api/tvmaze";
import imageToGradient from "image-to-gradient";

import TitleandRating from "./TitleandRating";
import ShowDescription from "./showDescription";
import OtherDetails from "./OtherDetails";
import Cast from "./Cast";
import MyState from "./State";

class App extends React.Component {
    state = MyState;
    onSearchSubmit = async term => {
        console.log(term);
        const response = await tvmaze.get("/singlesearch/shows", {
            params: { q: term, embed: "cast" }
        });
        let data = response.data;
        this.setState({
            title: data.name,
            rating: data.rating.average,
            poster: data.image.medium,
            description: data.summary,
            otherDetails: [
                data.language,
                data.genres,
                data.schedule,
                data.status
            ]
        });
    };

    componentDidUpdate() {
        this.getGradient();
    }

    getGradient() {
        let options = {
            angle: 0, // gradient angle in degrees
            steps: 5 // number of steps
        };

        imageToGradient(this.state.poster, options, function(err, cssGradient) {
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
                            <TitleandRating
                                title={this.state.title}
                                rating={this.state.rating}
                            />
                            <div
                                style={{
                                    minHeight: "220px",
                                    fontSize: "20px",
                                    lineHeight: "56pt"
                                }}
                            >
                                <ShowDescription
                                    description={this.state.description}
                                />
                                 <OtherDetails
                                        details={this.state.otherDetails}
                                    />
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
                                src={this.state.poster}
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
