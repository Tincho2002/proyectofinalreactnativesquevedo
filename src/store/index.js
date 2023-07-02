import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import {
  authReducer,
  cartReducer,
  categoriesReducer,
  counterReducer,
  ordersReducer,
  productsReducer,
} from "./reducers/index";

const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  cart: cartReducer,
  orders: ordersReducer,
  auth: authReducer,
  counter: counterReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
