import { useDispatch, useSelector } from "react-redux";

function Cart() {
  const cartData = useSelector((state) => state.cartReducer);
  console.log(cartData);
  return (
    <main>
      <h1>Cart</h1>
    </main>
  );
}

export default Cart;
