import { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../css/cart.scss";
import CartList from "../components/CartList";
import { selectClearCart, allClearCart } from "../routes/store";

const SHIPPING_COST = 2500;
const FREE_SHIPPING = 50000;

function Cart() {
  const cartData = useSelector((state) => state.cartReducer);
  const [checkedItems, setCheckedItems] = useState([...cartData]);

  let totalOrder = checkedItems.reduce(
    (acc, item) => acc + item.price * item.quan,
    0
  );
  const shipping = totalOrder > FREE_SHIPPING ? 0 : SHIPPING_COST;
  const totalPrice = totalOrder + shipping;
  const allCheckBtn = useRef();
  const dispatch = useDispatch();
  console.log(checkedItems, "나는선택된데이터");

  useEffect(() => {
    console.log(checkedItems);
  }, [checkedItems]);
  const handleAllCheck = (isAllchecked) => {
    if (isAllchecked) {
      setCheckedItems([...cartData]);
    } else {
      setCheckedItems([]);
    }
  };

  const handleCheckedItems = (data, isChecked) => {
    if (isChecked) {
      setCheckedItems([...checkedItems, data]);
    } else {
      setCheckedItems([...checkedItems].filter((item) => item.id !== data.id));
    }
  };
  const clearCart = (change) => {
    let clearId = checkedItems.map((item) => item.id);
    dispatch(change(clearId));
    setCheckedItems([]);
  };

  return (
    <main>
      <h1>Cart</h1>
      <div className="cart-wrap">
        <table className="cart-table">
          <thead>
            <tr>
              <th className="product-check">
                <input
                  ref={allCheckBtn}
                  type="checkbox"
                  checked={
                    cartData.length === checkedItems.length ? true : false
                  }
                  onChange={(e) => {
                    handleAllCheck(e.target.checked);
                  }}
                />
              </th>
              <th className="product-info">상품정보</th>
              <th>수량</th>
              <th>가격</th>
            </tr>
          </thead>
          <tbody>
            {cartData.map((item) => (
              <CartList
                id={item.id}
                name={item.name}
                price={item.price}
                image={item.image}
                quan={item.quan}
                checkedItems={checkedItems}
                setCheckedItems={setCheckedItems}
                handleCheckedItems={handleCheckedItems}
              />
            ))}
          </tbody>
        </table>
        <button onClick={() => clearCart(selectClearCart)}>
          선택상품 삭제
        </button>
        <button onClick={() => clearCart(allClearCart)}>전체상품 삭제</button>
        <table className="cart-table">
          <tbody>
            <tr>
              <th>총 주문금액</th>
              <th>총 배송비</th>
              <th>총 결제금액</th>
            </tr>
            <tr>
              <td>{totalOrder}원</td>
              <td>{shipping}원</td>
              <td>{totalPrice}원</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default Cart;
