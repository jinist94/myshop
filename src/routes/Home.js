// import productData from '../data/data.js';
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../css/media.css";
import "../css/home.scss";

function Recommend({ id, name, price, image }) {
  return (
    <li className="recommend-box">
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
        <p className="price">{price.toLocaleString()}</p>
      </Link>
    </li>
  );
}

function VisualBn() {
  return (
    <div className="visualBn">
      <div className="visual-box">
        <ul>
          <li>
            <img src="/images/mainRolling-01.jpg" />
          </li>
          <li>
            <img src="/images/mainRolling-02.jpg" />
          </li>
        </ul>
      </div>
    </div>
  );
}

function Home() {
  const productData = useSelector((state) => state.productReducer);
  const [visual, setVisual] = useState(0);
  return (
    <main className="home">
      <VisualBn></VisualBn>
      <div className="main-inner">
        <div className="recommend-area">
          <h3 className="title"> 이달의 추천 아이템</h3>
          <div className="product-list-box">
            <ul>
              {productData.map((item, i) => (
                <Recommend
                  key={i}
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  image={item.image}
                />
              ))}
            </ul>
          </div>
        </div>
        <div className="recommend"></div>
      </div>
    </main>
  );
}

export default Home;
