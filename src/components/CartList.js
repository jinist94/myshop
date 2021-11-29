import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseQuan, decreaseQuan, delCart } from "../routes/store";

function CartList(props) {
  const {
    id,
    price,
    image,
    quan,
    handleCheckedItems,
    checkedItems,
    setCheckedItems,
  } = props;
  const cartData = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  const dispatchQuan = (change) => {
    const index = cartData.findIndex((elm) => elm.id === props.id);
    dispatch(change(index));
  };

  const handleChecked = (isChecked) => {
    handleCheckedItems({ id, price, image, quan }, isChecked);
  };

  return (
    <tr>
      <td className="product-check">
        <input
          type="checkbox"
          checked={
            checkedItems.findIndex((item) => item.id == id) < 0 ? false : true
          }
          onChange={(e) => handleChecked(e.target.checked)}
        />
      </td>
      <td className="product-info">
        <img src={props.image} alt={props.name} />
        <div className="info-area">
          <h4>{props.name}</h4>
          <span>{props.price}원</span>
          <button
            className="del-btn"
            onClick={() => {
              dispatch(delCart(props.id));
              setCheckedItems(
                checkedItems.filter((item) => item.id !== props.id)
              );
            }}
          >
            지우기
          </button>
        </div>
      </td>
      <td className="product-quan">
        <button
          className="plus-btn"
          onClick={() => {
            dispatchQuan(increaseQuan);
          }}
        >
          +
        </button>
        <input type="tel" value={props.quan} />
        <button
          className="minus-btn"
          onClick={() => {
            dispatchQuan(decreaseQuan);
          }}
        >
          -
        </button>
      </td>
      <td className="product-order">
        <span>{(props.quan * props.price).toLocaleString()}원</span>
        <button>BUY NOW</button>
      </td>
    </tr>
  );
}

export default CartList;
