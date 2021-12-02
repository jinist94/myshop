import { useParams } from "react-router";
import ListItem from "../components/ListItem";
import { useSelector } from "react-redux";

function Search() {
  const productData = useSelector((state) => state.productReducer);
  const { keyword } = useParams();
  const searchData = productData.filter((item) => item.name.includes(keyword));
  console.log(searchData, "이건 searchData");
  console.log(keyword, "이건 params");
  return (
    <main>
      <h2>
        {searchData.length > 0
          ? `" ${keyword} " 로 검색한 결과입니다.`
          : "검색결과가 없습니다."}
      </h2>
      <div className="product-list-box">
        <ul>
          {searchData.map((item, i) => (
            <ListItem key={i} data={item} />
          ))}
        </ul>
      </div>
    </main>
  );
}

export default Search;
