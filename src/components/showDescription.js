import React from "react";

const ShowDescription = props => {
  return (
    <div dangerouslySetInnerHTML={{ __html: getHTML(props.description) }} />
  );
};

function getHTML(description) {
  let desc = { __html: description };
  return desc.__html;
}
export default ShowDescription;
