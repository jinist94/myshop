import { createStore, combineReducers } from "redux";
import productData from "../data/data.js";

const ADD_CART = "ADD_CART";
const INCREASE_QUAN = "INCREASE_QUAN";
const DECREASE_QUAN = "DECREASE_QUAN";
const DELETE_CART = "DELETE_CART";
const SELECT_CLEAR_CART = "SELECT_CLEAR_CART";
const ALL_CLEAR_CART = "ALL_CLEAR_CART";

export const addCart = ({ id, name, price, image }, value) => {
  return {
    type: ADD_CART,
    payload: { id, name, price, image, quan: value },
  };
};

export const delCart = (id) => {
  return {
    type: DELETE_CART,
    payload: { id },
  };
};

export const selectClearCart = (idArray) => {
  return {
    type: SELECT_CLEAR_CART,
    payload: { idArray },
  };
};

export const allClearCart = () => {
  return {
    type: ALL_CLEAR_CART,
  };
};

export const increaseQuan = (index) => {
  return {
    type: INCREASE_QUAN,
    payload: { index },
  };
};

export const decreaseQuan = (index) => {
  return {
    type: DECREASE_QUAN,
    payload: { index },
  };
};

const productReducer = (state = productData, action) => {
  return state;
};

const cartReducer = (state = [], action) => {
  let copy = [...state];
  let { payload } = action;
  switch (action.type) {
    case ADD_CART:
      let index = state.findIndex((elm) => elm.id === payload.id); // cart state와 dispatch로 보낸 데이터의 id를 비교. 1개가 담겨있을 경우 index는 0임을 기억해야함.
      if (index >= 0) {
        copy[index].quan += payload.quan;
        return copy;
      } else {
        return [...copy, { ...payload }];
      }
    case DELETE_CART:
      return copy.filter((item) => item.id !== payload.id);
    case ALL_CLEAR_CART:
      copy = [];
      return copy;
    case SELECT_CLEAR_CART:
      return copy.filter((item) => !payload.idArray.includes(item.id));
    case INCREASE_QUAN:
      copy[payload.index].quan += 1;
      return copy;
    case DECREASE_QUAN:
      if (state[payload.index].quan > 1) {
        copy[payload.index].quan -= 1;
      }
      return copy;
    default:
      return state;
  }
};
const store = createStore(combineReducers({ productReducer, cartReducer }));

export default store;
