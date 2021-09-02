import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getSingleChar,
  selectSingleChar
} from "./../../store/singleCharSlice.js";

import Loading from "./loading.js";
import Button from "./../btn.js";

/*** *** *** *** *** *** *** ***/
// styles
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
        <section>
          <img src={char.image} alt={char.name} />
          <ul>
            <li>Name: {char.name ? char.name : "Unkown"}</li>
            <li>Status: {char.status ? char.status : "Unkown"}</li>
            <li>Species: {char.species ? char.species : "Unkown"}</li>
            <li>Type: {char.type ? char.type : "Unkown"}</li>
            <li>Gender: {char.gender ? char.gender : "Unkown"}</li>
            <li>Origin: {char.origin.name ? char.origin.name : "Unkown"}</li>
          </ul>
        </section>
      )}
      <Button onClick={goHome}>Back to home</Button>
    </main>
  );
};
/*** *** *** *** *** *** *** ***/

export default Character;
