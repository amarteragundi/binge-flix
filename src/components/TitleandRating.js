import React from "react";

const TitleandRating = props => {
    if (props.title) {
        return (
            <h1
                style={{
                    color: "white",
                    textTransform: "uppercase"
                }}
            >
                {props.title} |
                <span
                    style={{
                        fontSize: "14px",
                        verticalAlign: "middle"
                    }}
                >
                    <i
                        className="heart icon"
                        style={{ color: "#ff6d75", marginLeft: "5px" }}
                    />
                    {props.rating}
                </span>
            </h1>
        );
    } else {
        return <div />;
    }
};

export default TitleandRating;
