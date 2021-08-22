import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectChars} from "./store/charsSlice.js";
import { getChars } from "./store/charsSlice.js";

const Chars = (props) => {
  const dispatch = useDispatch();
  const data = useSelector(selectChars);

  useEffect(() => {
    dispatch(getChars());
  }, [dispatch]);

  return (
    <main>
      <ul>
        {data.data.map(item => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
      <button onClick={() => {dispatch(getChars())}}>Load More</button>
    </main>
  );
};

export default Chars;
