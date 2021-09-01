import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";


const bounce = keyframes`
  to {
    transform: rotate(calc(var(--i) * 18deg)) translateY(-3.75em) scale(.9);
  }
`
const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`

const Load = styled.div`
  /*** change this values to customaize ***/
  --size: .5rem;
  --dot-time: .6s;
  --dot-color: var(--main-1);
  --rotate-duration: 4s;
  /*** *** ***/

  font-size: var(--size);
  width: 10em;
  height: 10em;
  position: relative;

  animation: ${rotate} var(--rotate-duration) linear infinite forwards;
`;

const LoadDot = styled.div`
  ${props => `--i: ${props.i};`}
  width: 1em;
  height: 1em;
  position: absolute;
  left: calc(50% - .5em);
  top: calc(50% - .5em);
  border-radius: 50%;
  background: var(--dot-color);
  transform: rotate(calc(var(--i) * 18deg)) translateY(-5em);

  animation: ${bounce} var(--dot-time) ease-in-out infinite alternate;
  ${props => props.i % 2 === 0 ? "animation-delay: var(--dot-time)" : null}
`;

const Loading = () => (
  <Load>
    {Array(20).fill(0).map((item, i) => (
      <LoadDot i={i} key={i}/>
    ))}
  </Load>
);

export default Loading;
