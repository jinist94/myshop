import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import "../css/detail.scss";

const tabList = [
  {
    tab: "상품정보",
    content: <DetailProduct />,
  },
  {
    tab: "리뷰",
    content: <DetailReview />,
  },
  {
    tab: "Q&amp;A",
    content: <DetailQna />,
  },
  {
    tab: "주문정보",
    content: <DetailOrder />,
  },
];

const useTab = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);

  return {
    currentTab: allTabs[currentIndex],
    changeTab: setCurrentIndex,
    currentIndex,
  };
};
const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    setValue(event.target.value);
  };
  const increase = () => setValue(value + 1);
  const decrease = () => {
    if (value > 0) setValue(value - 1);
  };

  return { value, onChange, increase, decrease };
};

const handleKeyDown = (event) => {
  if (Number(event.key) || event.key == "Backspace") {
    console.log(event.keyCode);
  } else {
    console.log("no");
    event.preventDefault();
  }
};

// Detaile start

function Detail(props) {
  const {
    location: {
      state: { id, name, price, image },
    },
  } = props;
  const cartData = useSelector((state) => state.cartReducer);
  const quanInput = useRef();
  const dispatch = useDispatch();
  const history = useHistory();

  const { currentTab, changeTab, currentIndex } = useTab(0, tabList);
  const quan = useInput(1);

  function clickCart(value) {
    dispatch({
      type: "ADD_CART",
      payload: { id, name, price, image, quan: value },
    });
    history.push("/cart");
  }

  return (
    <main>
      <div className="detail-wrap">
        <div className="detail-top">
          <div className="img-area">
            <img src={image} />
          </div>
          <div className="info-area">
            <h3 className="name">{name}</h3>
            <p className="price">{price}</p>
            <button className="plus-btn" onClick={quan.increase}>
              +
            </button>
            <input
              ref={quanInput}
              type="tel"
              onKeyDown={handleKeyDown}
              value={quan.value}
              onChange={quan.onChange}
            />
            <button className="minus-btn" onClick={quan.decrease}>
              -
            </button>
            <div className="btn-box">
              <button className="buy-btn">구매하기</button>
              <button
                className="cart-btn"
                onClick={() => clickCart(quan.value)}
              >
                장바구니
              </button>
            </div>
          </div>
        </div>
        <ul className="detail-tab">
          {tabList.map((item, index) => (
            <li
              className={currentIndex === index && "selected"}
              onClick={() => changeTab(index)}
            >
              {item.tab}
            </li>
          ))}
        </ul>
        <div className="detail-content">
          <div>{currentTab.content}</div>
        </div>
      </div>
    </main>
  );
}

function DetailProduct() {
  return (
    <div>
      <h1>상품정보</h1>
    </div>
  );
}

function DetailReview() {
  return (
    <div>
      <h1>리뷰</h1>
    </div>
  );
}
function DetailQna() {
  return (
    <div>
      <h1>큐엔에이</h1>
    </div>
  );
}

function DetailOrder() {
  return (
    <div>
      <h1>주문정보</h1>
    </div>
  );
}
export default Detail;
