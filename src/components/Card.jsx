import "./Card.scss";

const Card = (props) => {
  const { image, title, description } = props;
  return (
    <div className="col-xl-3 col-lg-4 col-md-6 col-11">
      <div className="card">
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="image-card"
        ></div>
        <div className="title-card">{title}</div>
        <p className="decription"> {description}</p>
      </div>
    </div>
  );
};

export default Card;
