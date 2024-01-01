import usePagination from "../hooks/use-pagination";
import "./Pagination.scss";
import NextButton from "./NextButton";
import PreviousButton from "./PreviousButton";
import Button from "./Button";
import { calculateTotalButtons } from "../helper/Helper";
import { DEFAULT_PAGE_NUM , MAX_BUTTONS_TO_SHOW  } from "../constants/ConstNumbers";

const Dots = () => {
  return (
    <li className="page-item me-1">
      <strong>...</strong>
    </li>
  );
};

const Pagination = (props) => {
  const { onGetActivatedPage, count, limit } = props;
  const totalButtons = calculateTotalButtons(count, limit);
  const { displayedButtons, activatedPage, setActivatedPage } = usePagination(
    DEFAULT_PAGE_NUM,
    totalButtons
  );
  
  const updatePageNumber = (number)=> {
    setActivatedPage(number);
    onGetActivatedPage(number);
  }

  return (
    <div className="pagination-wrapper text-center">
      <ul className="pagination justify-content-center">
        <PreviousButton updatePage={updatePageNumber} page={activatedPage} />
        {activatedPage > 3 && totalButtons > MAX_BUTTONS_TO_SHOW && (
          <>
            <Button
              currentPage={activatedPage}
              number={1}
              setPage={updatePageNumber}
            />
            <Dots />
          </>
        )}

        {displayedButtons.map((number) => (
          <Button
            key={number}
            currentPage={activatedPage}
            number={number}
            setPage={updatePageNumber}
          />
        ))}
        {totalButtons > MAX_BUTTONS_TO_SHOW && activatedPage + 2 < totalButtons && (
          <>
            <Dots />
            <Button
              currentPage={activatedPage}
              number={totalButtons}
              setPage={updatePageNumber}
            />
          </>
        )}
        <NextButton
          updatePage={updatePageNumber}
          page={activatedPage}
          total={totalButtons}
        />
      </ul>
    </div>
  );
};

export default Pagination;
