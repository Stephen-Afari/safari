import { combineReducers } from "redux";
import { categoriesReducer } from "./categories/category.reducer";
import { cartReducer } from "./cart/cart.reducer";

export const RootReducer = combineReducers({
  categories: categoriesReducer,
  cart: cartReducer,
});
