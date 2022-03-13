import React from "react";

const LocationLoader = (props) => {
  return (
    <div class='ui active dimmer'>
      <div class='ui big text loader'>{props.message}</div>
      <div class='ui big text loader'>{props.message}</div>
      <div class='ui big text loader'>{props.message}</div>
      <div class='ui big text loader'>{props.message}</div>
      <div class='ui big text loader'>{props.message}</div>
      <div class='ui big text loader'>{props.message}</div>
    </div>
  );
};

LocationLoader.defaultProps = {
  message: "Loading...",
};

export default LocationLoader;
