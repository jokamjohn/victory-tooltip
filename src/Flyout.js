import React from "react";

const FlyOut = ({ x, y, datum, dx, dy }) => (
  <g>
    <rect
      x={x - 40}
      y={y - 50}
      width="90"
      dx={dx}
      dy={dy}
      height="40"
      rx="4.5"
      fill="white"
      stroke="#868C97"
    />
    <text
      x={x - 20}
      y={y - 35}
      font-size="10"
      font-weight="bold"
      fill="#868C97"
    >
      {`Name: ${datum.name}`}
    </text>
    <text
      x={x - 20}
      y={y - 20}
      font-size="10"
      font-weight="bold"
      fill="#868C97"
    >
      {`score: ${datum.score}`}
    </text>
  </g>
);

export default FlyOut;
