import { useState, useEffect } from "react";
import { MAX_BUTTONS_TO_SHOW } from "../constants/ConstNumbers";

const usePagination = (defaultPage, total) => {
  const [displayedButtons, setDisplayedButtons] = useState([]);
  const [activatedPage, setActivatedPage] = useState(defaultPage);

  const createDisplayedButtons = () => {
    let sliceStart, sliceEnd;

    if (total <= MAX_BUTTONS_TO_SHOW) {
      setDisplayedButtons(Array.from({ length: total }, (_, i) => i + 1));
    }

    if (activatedPage <= 3) {
      sliceStart = 1;
      sliceEnd = MAX_BUTTONS_TO_SHOW;
    } else if (activatedPage + 2 >= total) {
      sliceStart = total - MAX_BUTTONS_TO_SHOW + 1;
      sliceEnd = total;
    } else {
      sliceStart = activatedPage - 2;
      sliceEnd = activatedPage + 2;
    }

    setDisplayedButtons(
      Array.from(
        { length: sliceEnd - sliceStart + 1 },
        (_, i) => i + sliceStart
      )
    );
  };

  useEffect(() => {
    createDisplayedButtons();
  }, [activatedPage]);

  return { displayedButtons, activatedPage, setActivatedPage };
};

export default usePagination;
