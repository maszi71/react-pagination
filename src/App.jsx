import { useEffect, useState } from "react";
import "./App.scss";
import Card from "./Card";
import "bootstrap/dist/css/bootstrap.css";
import { chunkData, calculateOffset } from "./helper/Helper";
import Pagination from "./Pagination";
import { LIMIT_ITEM } from "./constants/LimitItem";

function App() {
  const [response, setResponse] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const getActivatedPage = (page) => {
    if (currentPage !== page) {
      setCurrentPage(page);
      let offset = calculateOffset(page, LIMIT_ITEM);
      const res = chunkData(LIMIT_ITEM, offset);
      setResponse(res);
    }
  };

  useEffect(() => {
    const res = chunkData(LIMIT_ITEM, 0);
    setResponse(res);
  }, []);

  return (
    <div className="App container-fluid">
      {response && (
        <div
          className={`row justify-content-lg-start justify-content-center  align-items-center`}>
          {response.slicedData.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      )}
      {response && (
        <Pagination
          onActivatedPage={getActivatedPage}
          count={response.count}
          limit={LIMIT_ITEM}
          currentPage={currentPage}
        />
      )}
    </div>
  );
}

export default App;
