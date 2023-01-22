import { useCallback, useState,useEffect } from "react";

const usePagination = ({count, limit, currentPage}) => {

    const [totalButtons, setTotalButtons] = useState(null);
    const [displayedButtons, setDisplayedButtons] = useState([]);
    const [activatedPage, setActivatedPage] = useState(currentPage);

    const calculateTotalButtons = useCallback(() => {
        let total = Math.ceil(count / limit);
        setTotalButtons(total);
      }, [count , limit]);

      const createDisplayedButtons = useCallback(() => {
        // begignig buttons
        if (totalButtons) {
          // total button less than 5
          if(totalButtons < 5) {
            setDisplayedButtons(Array.from({ length: totalButtons},(_, i) => i + 1));
          }
          // total button more than 5 and display first 5 buttons
         else if (activatedPage <= 3) {
            setDisplayedButtons(Array.from({ length: 5 },(_, i) => i + 1));
          }
          // end buttons
          else if (activatedPage + 2 >= totalButtons) {
            let startButton = totalButtons - 4;
            let endButton = totalButtons;
            setDisplayedButtons(Array(endButton - startButton + 1).fill().map(() => startButton++));
          }
          // middle buttons
          else {
            let startButton = activatedPage - 2;
            let endButton = activatedPage + 2;
            let createdArray = Array(endButton - startButton + 1)
              .fill()
              .map(() => startButton++);
            setDisplayedButtons(createdArray);
          }
        }
      },[totalButtons,activatedPage])

    const  updateActivatedPage = (page) => {
        setActivatedPage(page)
    }

      useEffect(() => {
        calculateTotalButtons();
      }, [count]);
    
      useEffect(() => {
        createDisplayedButtons();
      }, [totalButtons]);
    
      useEffect(() => {
        createDisplayedButtons();
      }, [activatedPage]);
    
      useEffect(()=> {
        setActivatedPage(currentPage)
      }, [currentPage])  

      return {totalButtons,displayedButtons , activatedPage , updateActivatedPage}

}

export default usePagination;