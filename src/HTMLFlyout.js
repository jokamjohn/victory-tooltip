import React from "react";
import styled from "styled-components";

const Container = styled("div")`
  color: #868c97;
  margin: 0;
  padding: 0;
  font-size: 10px;
  height: 100%;
  width: 100%;
`;

const DataContainer = styled("div")`
  border: 1px solid #868c97;
  border-radius: 5px;
  background-color: #ffffff;
  padding: 1em 0.5em 0.5em 1em;
`;

const Name = styled("div")`
  padding-bottom: 0.2em;
`;

const Score = styled("div")`
  padding-bottom: 0.2em;
`;

const HTMLFlyOut = ({ x, y, datum }) => (
  <g style={{ pointerEvents: "none" }}>
    <foreignObject x={x - 40} y={y - 50} width="90" height="50">
      <Container xmlns="http://www.w3.org/1999/xhtml">
        <DataContainer>
          <Name>{`Name: ${datum.name}`}</Name>
          <Score>{`Points: ${datum.score}`}</Score>
        </DataContainer>
      </Container>
    </foreignObject>
  </g>
);

export default HTMLFlyOut;
