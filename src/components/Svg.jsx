import * as React from "react";
const Svg = (props) => (
  <svg
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 32 32"
    xmlSpace="preserve"
    {...props}
  >
    <circle
      style={{
        fill: "none",
        stroke: "#000000",
        strokeWidth: 2,
        strokeMiterlimit: 10,
      }}
      cx={16}
      cy={16}
      r={11}
    />
  </svg>
);
export default Svg;