import React from "react";

const Cast = props => {
    let details = props.details;
    let displayCast = details.map((item, key) => {
        return (
            <div key={key} className="column">
                <div className="ui fluid card" style={{ boxShadow: "none" }}>
                    <div className="image">
                        <img
                            src={
                                item.character.image
                                    ? item.character.image.medium
                                    : ""
                            }
                        />
                    </div>
                    <div className="content">
                        <a className="header">{item.character.name}</a>
                        <div className="meta">
                            <a>Played by {item.person.name}</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <div className="sixteen wide column">
            <div className="ui six column grid">{displayCast}</div>
        </div>
    );
};

export default Cast;
