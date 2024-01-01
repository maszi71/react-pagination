import "./Button.scss";
const Button = ({ currentPage, number, setPage }) => {
  return (
    <button
      onClick={() => setPage(number)}
      className={`${
        currentPage === number ? "active" : ""
      } btn page-item`}
    >
      {number}
    </button>
  );
};

export default Button;
