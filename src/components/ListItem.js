import { Link } from "react-router-dom";

export default function ListItem(props) {
  const { id, name, price, image } = props.data;
  console.log(props, "이건 listItem");
  return (
    <li>
      <Link
        to={{
          pathname: "/product/" + id,
          state: {
            id,
            name,
            price,
            image,
          },
        }}
      >
        <div className="list-thumb">
          <img src={image} />
        </div>
        <p className="name">{name}</p>
        <p className="price">{price}</p>
      </Link>
    </li>
  );
}
