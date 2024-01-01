import arrowRight from "../assets/arrow-right.png";


const NextButton = ({ updatePage, page, total }) => {
  const nextButtonHandler = () => {
    updatePage(page + 1);
  };

  return (
    <li className="page-item">
      <button
        className="btn next-button"
        style={{
          pointerEvents: page === total ? "none" : "",
        }}
        onClick={nextButtonHandler}
      >
        <img src={arrowRight} alt="arrow right" />
      </button>
    </li>
  );
};

export default NextButton;
