import React from 'react';

const OtherDetails = (props) => {
    return (
        <div className="four wide column">
            <h3 className="ui header">
                <i className="large icons">
                    <i className={`${props.icon} icon`} />
                </i>
                {props.content}
            </h3>
        </div>
    );
};

export default OtherDetails;