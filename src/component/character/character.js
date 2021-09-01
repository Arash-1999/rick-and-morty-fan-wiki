import React from "react";

import Button from "./../btn.js";

const Character = ({ match, history }) => {
  // back to home event listener
  const goHome = ()  => {
    history.push("/");
  };

  return (
    <main>
      <Button onClick={goHome}>Back to home</Button>
    </main>
  );
};

export default Character;
