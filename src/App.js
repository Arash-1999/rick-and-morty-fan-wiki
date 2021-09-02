import React from "react";
import { Route, HashRouter as Router } from "react-router-dom";

import Chars from "./chars";
import Character from "./component/character/character";

const App = () => {
  return (
    <Router>
      <Route path="/" exact={true} component={Chars} />
      <Route
        path="/character/:id"
        component={Character} />
    </Router>
  );
};

export default App;
