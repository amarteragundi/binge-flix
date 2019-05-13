import React from "react";

const loader = () => {
    return (
        <div className="ui segment" style={{height: "100vh"}}>
            <div className="ui active dimmer">
                <div className="ui massive text loader">Loading</div>
            </div>
        </div>
    );
};

export default loader;