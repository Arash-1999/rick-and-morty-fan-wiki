import React from "react";
import { useSelector } from "react-redux";

import { selectSingleChar } from "./../../store/singleCharSlice.js";

import Loading from "./loading.js";
import Button from "./../btn.js";

const Character = ({ match, history }) => {
  const { loading } = useSelector(selectSingleChar);

  // back to home event listener
  const goHome = ()  => {
    history.push("/");
  };

  return (
    <main>
      {loading ? (<Loading />) : (<p>data loaded</p>)}
      <Button onClick={goHome}>Back to home</Button>
    </main>
  );
};

export default Character;
