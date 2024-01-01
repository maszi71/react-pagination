import { useEffect, useState } from "react";
import "./App.scss";
import List from "./components/List";
import "bootstrap/dist/css/bootstrap.css";
import { chunkData, calculateOffset } from "./helper/Helper";
import Pagination from "./components/Pagination";
import { LIMIT_ITEM } from "./constants/ConstNumbers";

function App() {
  const [response, setResponse] = useState(null);

  const intialData = () => {
    const res = chunkData(LIMIT_ITEM, 0);
    setResponse(res);
  };

  const getActivatedPageHandler = (page) => {
    const offset = calculateOffset(page, LIMIT_ITEM);
    const res = chunkData(LIMIT_ITEM, offset);
    setResponse(res);
  };
  useEffect(() => {
    intialData();
  }, []);

  return (
    <div className="App container-fluid">
      <List items={response?.slicedData} />
      {response && (
        <Pagination
          onGetActivatedPage={getActivatedPageHandler}
          count={response?.count}
          limit={LIMIT_ITEM}
        />
      )}
    </div>
  );
}

export default App;
