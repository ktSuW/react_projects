import './SeasonDisplay.css';
import React from "react";

const seasonConfig = {
  summer: { text: "Let's hit the beach 🏖️!", iconName: "sun" },
  winter: { text: "It is chilly☃️❄️!", iconName: "snowflake" },
};
// Nothern hemi : April to Aug 3-7 summer
// else winter
//  0   1   2   3   4   5   6   7   8   9   10   11
// jan  feb mar apr may jun jul aug sep oct nov dec
// -----------                      ---------------- nothern hemi winter
//              -------------------- nothern hemi summer
const getSeason = (latitude, month) => {
  if (month > 2 && month < 9) {
    return latitude > 0 ? "summer" : "winter";
  } else {
    return latitude > 0 ? "winter" : "summer";
  }
};
const SeasonDisplay = (props) => {
  const season = getSeason(props.latitude, new Date().getMonth());
  // // destructure 
  // // object accessor method 
  // const {text, iconName} = seasonConfig[season];
  const { text, iconName } = seasonConfig[season];
  // const text = season === "Winter" ? "" : "";
  // const icon = season === "Winter" ? "snowflake" : "sun";
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
