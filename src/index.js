import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import productData from "./data/data.js";

import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

function productReducer(state = productData, action) {
  return state;
}
function cartReducer(state = [], action) {
  switch (action.type) {
    case "ADD_CART":
      let copy = [...state];
      let index = state.findIndex((elm) => elm.id === action.payload.id); // cart state와 dispatch로 보낸 데이터의 id를 비교. 1개가 담겨있을 경우 index는 0임을 기억해야함.
      if (index >= 0) {
        copy[index].quan += action.payload.quan;
        return copy;
      } else {
        copy.push({ ...action.payload });
        return copy;
      }
    default:
      return state;
  }
}
let store = createStore(combineReducers({ productReducer, cartReducer }));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
