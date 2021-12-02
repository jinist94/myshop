import { useReducer, useRef, useState } from "react";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

function Header() {
  const [searchValue, setSearchValue] = useState("");
  const searchInput = useRef();
  const cartData = useSelector((state) => state.cartReducer);
  const history = useHistory();

  return (
    <header>
      <div className="header-inner">
        <div className="top-area">
          <Link className="top-Logo" to="/">
            Logo
          </Link>
          <div className="inserted">
            <div className="search-area">
              <form
                className="search-form"
                onSubmit={(e) => {
                  console.log(searchValue);
                  e.preventDefault();
                  history.push({ pathname: `/search/${searchValue}` });
                  searchInput.current.value = "";
                }}
              >
                <input
                  ref={searchInput}
                  type="text"
                  onChange={(e) => setSearchValue(e.target.value)}
                />
                <button>검색</button>
              </form>
            </div>
            <ul>
              <li>login</li>
              <li>shop</li>
              <li>
                <Link to="/cart">cart {cartData.length} </Link>
              </li>
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
              <Link to="/product/list/1">BEST</Link>
            </li>
            <li>
              <Link to="/">NEW</Link>
            </li>
            <li>
              <Link to="/">EVENT</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
