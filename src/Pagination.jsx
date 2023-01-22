


import { useEffect, Fragment } from "react";
import usePagination from "./hooks/use-pagination";
import "./Pagination.scss";

const Pagination = (props) => {
  const { onActivatedPage, count, limit, currentPage } = props;
  const {totalButtons,displayedButtons , activatedPage , updateActivatedPage} = usePagination({count, limit, currentPage})

  const changePageNumberHandler = (number) => {
    updateActivatedPage(number);
  };

  const nextButtonHandler = () => {
    updateActivatedPage(activatedPage + 1);
  };

  const previousButtonHandler = () => {
    updateActivatedPage(activatedPage - 1);
  };

  useEffect(() => {
    onActivatedPage(activatedPage);
  }, [activatedPage]);


  return (
    <div className="pagination-wrapper text-center">
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <button
            className="btn previous-button"
            style={{ pointerEvents: activatedPage === 1 ? "none" : "" }}
            onClick={previousButtonHandler}
          >
           Left
          </button>
        </li>
        {activatedPage > 3 && totalButtons > 5 ? (
          <Fragment>
            <li
              className={`${activatedPage === 1 ? "active" : ""} page-item`}
              onClick={() => changePageNumberHandler(1)}
            >
              <button className="btn page-link">{1}</button>
            </li>
            <li className="page-item me-1">
              <strong>...</strong>
            </li>
          </Fragment>
        ) : (
          ""
        )}

        {displayedButtons.map((number) => (
          <li
            key={number}
            onClick={() => changePageNumberHandler(number)}
            className={`${activatedPage === number ? "active" : ""} page-item`}
          >
            <button className="btn page-link">{number}</button>
          </li>
        ))}
        {totalButtons > 5 && activatedPage + 2 < totalButtons ? (
          <Fragment>
            <li className="page-item me-1">
              <strong>...</strong>
            </li>
            <li
              className={`${
                activatedPage === totalButtons ? "active" : ""
              } page-item`}
              onClick={() => changePageNumberHandler(totalButtons)}
            >
              <button className="btn page-link">{totalButtons}</button>
            </li>
          </Fragment>
        ) : (
          ""
        )}

        <li className="page-item">
          <button
            className="btn next-button"
            style={{
              pointerEvents: activatedPage === totalButtons ? "none" : "",
            }}
            onClick={nextButtonHandler}
          >
           Right
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
