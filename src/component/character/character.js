import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "@emotion/styled";

import {
  getSingleChar,
  selectSingleChar
} from "./../../store/singleCharSlice.js";

import Loading from "./loading.js";
import Button from "./../btn.js";
import Image from "./../image.js";

/*** *** *** *** *** *** *** ***/
// styles
const ChracterCard = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media(max-width: 740px) {
    flex-direction: column;
  }
  padding: 1em;
  border-radius: .5em;
  border: 3px solid var(--main-1);
  background: ${() => {
    let num = Math.floor(Math.random() * 4) + 2;
    return `var(--main-${num})`;
  }};

  > img {
    flex: 1;
  }
`;

const List = styled.ul`
  list-style: none;
`;

const Dot = styled.span`
  display: inline-block;
  font-size: .75em;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  margin: 0 .5em;
  border: 2px solid white;
  background: ${(props) => props.color ? props.color : "white"};
`;
/*** *** *** *** *** *** *** ***/

/*** *** *** *** *** *** *** ***/
// character component
const Character = ({ match, history }) => {
  const dispatch = useDispatch();
  const { loading, char } = useSelector(selectSingleChar);

  // eslint-disable-next-line
  useEffect(() => dispatch(getSingleChar(match.params.id)), []);

  // back to home event listener
  const goHome = ()  => {
    history.push("/");
  };

  return (
    <main>
      {loading ? (<Loading />) : (
        <ChracterCard>
          <Image src={char.image} alt={char.name} margin="1em" />
          <List>
            <li>
              <strong>Name:</strong> {char.name ? char.name : "Unkown"}
            </li>
            <li>
              <strong>Status:</strong> {char.status ? char.status : "Unkown"}
              <Dot color={char.status === "Alive" ? "lime" : "crimson"} />
            </li>
            <li>
              <strong>Species:</strong> {char.species ? char.species : "Unkown"}
            </li>
            <li>
              <strong>Type:</strong> {char.type ? char.type : "Unkown"}
            </li>
            <li>
              <strong>Gender:</strong> {char.gender ? char.gender : "Unkown"}
            </li>
            <li>
              <strong>Origin:</strong> {char.origin.name ? char.origin.name : "Unkown"}
            </li>
          </List>
        </ChracterCard>
      )}
      <Button onClick={goHome}>Back to home</Button>
    </main>
  );
};
/*** *** *** *** *** *** *** ***/

export default Character;
