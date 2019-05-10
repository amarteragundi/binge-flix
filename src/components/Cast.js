import React from "react";

const Cast = props => {
    return (
        <div className="column">
            <div className="ui fluid card" style={{boxShadow:"none"}}>
                <div className="image">
                    <img src={props.img} />
                </div>
                <div className="content">
                    <a className="header">{props.charName}</a>
                    <div className="meta">
                        <a>
                            Played by {props.name}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cast;
