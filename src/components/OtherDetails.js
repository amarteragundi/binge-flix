import React from "react";

const OtherDetails = props => {
    let details, otherDetails;
    if (props.details) {
        details = props.details;
        let items = ["language", "film", "calendar", "circle"];
        otherDetails = details.map((item, key) => {
            if (Array.isArray(item, key)) {
                return (
                    <div key={key} className="four wide column">
                        <h3 className="ui header">
                            <i className="large icons">
                                <i className={`${items[key]} icon`} />
                            </i>
                            {item.join(", ")}
                        </h3>
                    </div>
                );
            } else if (
                typeof item === "object" &&
                item.constructor === Object
            ) {
                let detail = "";
                for (let property in item) {
                    if (typeof item[property] == "string") {
                        if (item[property]) detail += item[property];
                    } else {
                        if (item[property])
                            detail += ` ${item[property].join()}`;
                    }
                }
                return (
                    <div key={key} className="four wide column">
                        <h3 className="ui header">
                            <i className="large icons">
                                <i className={`${items[key]} icon`} />
                            </i>
                            {detail}
                        </h3>
                    </div>
                );
            } else {
                let iconColor;
                if (items[key] == "circle")
                    item == "Ended"
                        ? (iconColor = "red")
                        : (iconColor = "green");
                return (
                    <div key={key} className="four wide column">
                        <h3 className="ui header">
                            <i className="large icons">
                                <i
                                    className={`${items[key]} icon`}
                                    style={{ color: iconColor }}
                                />
                            </i>
                            {item}
                        </h3>
                    </div>
                );
            }
        });
    }
    // let [language, genre, schedule, status] = props;
    return (
        <div className="ui grid" style={{ marginTop: "30px" }}>
            {otherDetails}
        </div>
    );
};

export default OtherDetails;
