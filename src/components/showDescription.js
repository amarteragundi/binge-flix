import React from "react";

const ShowDescription = props => {
    return <div dangerouslySetInnerHTML={{__html: getHTML(props.description).__html}} />;
};

function getHTML(description){
    return {__html: description}
  }
export default ShowDescription;
