import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectChars} from "./store/charsSlice.js";
import { getChars } from "./store/charsSlice.js";

import ListContainer from "./component/list/listContainer.js";
import Button from "./component/btn.js";
import Search from "./component/search/search.js";
import Loading from "./component/loading.js";

const Chars = (props) => {
  const dispatch = useDispatch();
  const { data, loading, page }= useSelector(selectChars);

  useEffect(() => {
    // only get character list when there is no character in store
    if(data.length === 0) {
      dispatch(getChars());
    }
  // eslint-disable-next-line
  }, []);

  return (
    <main>
      <Search/>
      <ListContainer data={data} />
      {loading ? (<Loading />) : null}
      <Button
        disabled={loading || page === null}
        onClick={() => {dispatch(getChars())}}>Load More</Button>
    </main>
  );
};

export default Chars;
