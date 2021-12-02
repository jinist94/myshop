import { useSelector } from "react-redux";
import { useParams } from "react-router";

import ListItem from "../components/ListItem";
import "../css/list.scss";

function List() {
  const productData = useSelector((state) => state.productReducer);
  const params = useParams();
  console.log(params.id, "params ID", typeof params.id);

  const categoryItems = productData.filter((item) =>
    item.category.includes(parseInt(params.id))
  );
  console.log(categoryItems, "catagoryItems");
  return (
    <div className="list-wrap">
      <h1>정렬 하기</h1>
      <div className="product-list-box">
        <ul>
          {categoryItems.map((item, i) => (
            <ListItem key={i} data={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default List;
