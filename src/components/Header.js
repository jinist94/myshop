import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";

function Header() {
  const cartData = useSelector((state) => state.cartReducer);
  return (
    <header>
      <div className="top-area">
        <Link className="top-Logo" to="/">
          Logo
        </Link>
        <div className="inserted">
          <ul>
            <li>login</li>
            <li>shop</li>
            <li>cart {cartData.length}</li>
          </ul>
        </div>
      </div>
      <nav>
        <ul className="top-cate">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/list">CATEGORY</Link>
          </li>
          <li>
            <Link to="/">BEST</Link>
          </li>
          <li>
            <Link to="/">NEW</Link>
          </li>
          <li>
            <Link to="/">EVENT</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
