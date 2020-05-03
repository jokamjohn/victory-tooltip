import React from "react";
import styled from "styled-components";
import { VictoryChart, VictoryBar, VictoryTooltip } from "victory";
import HTMLFlyOut from './HTMLFlyout';

const Container = styled("div")`
  font-family: sans-serif;
  text-align: center;
`;

const data = [
  { name: "John", score: 20 },
  { name: "Joe", score: 10 },
  { name: "Jos", score: 30 },
  { name: "Joy", score: 15 },
  { name: "Joan", score: 40 },
  { name: "Johnny", score: 50 }
];

export default function App() {
  return (
    <Container>
      <h1>VictoryTooltip</h1>
      <VictoryChart>
        <VictoryBar
          data={data}
          labels={() => ''}
          labelComponent={
            <VictoryTooltip
              flyoutComponent={<HTMLFlyOut />}
            />
          }
          x="score"
          y="name"
        />
      </VictoryChart>
    </Container>
  );
}
