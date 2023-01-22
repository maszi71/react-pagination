import "./Card.scss";

const Card = ({ item }) => {
  return (
    <div className="col-xl-3 col-lg-4 col-md-6 col-11">
      <div className="card">
        <div
          style={{ backgroundImage: `url(${item.image})` }}
          className="image-card"></div>
        <div className="title-card">{item.title}</div>
        <p className="decription"> {item.description}</p>
      </div>
    </div>
  );
};

export default Card;
