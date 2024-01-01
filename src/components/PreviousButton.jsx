import arrowLeft from "../assets/arrow-left.png";

const PreviousButton = ({ updatePage, page })=> {

    const previousButtonHandler = () => {
        updatePage(page - 1);
      };

    return(
        <li className="page-item">
        <button
          className="btn previous-button"
          style={{ pointerEvents: page === 1 ? "none" : "" }}
          onClick={previousButtonHandler}
        >
          <img src={arrowLeft} alt="arrow left" />
        </button>
      </li>
    )
}
export default PreviousButton;