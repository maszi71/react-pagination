import Card from "./Card";
const List = ({ items }) => {
  return (
    <div className="row justify-content-lg-start justify-content-center  align-items-center">
      {items?.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
};

export default List;
