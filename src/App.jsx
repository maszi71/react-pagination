import { useEffect, useState } from "react";
import "./App.css";
import { chunkData,calculateOffset } from "./helper/Helper";
import Pagination from "./Pagination";



function App() {
  const [response, setResponse] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const getActivatedPage = (page) => {
    if (currentPage !== page) {
      setCurrentPage(page);
      let offset = calculateOffset(page, 12);
      const res =   chunkData(12 , offset);
      console.log(res);
      setResponse(res);
    }
  };

  useEffect(() => {
    const res = chunkData(12, 0);
    setResponse(res);
  }, []);

  return (
    <div className="App">
      {
        response &&  <Pagination
        onActivatedPage={getActivatedPage}
        count={response.count}
        limit={12}
        currentPage={currentPage}
      />
      }
     
    </div>
  );
}

export default App;
