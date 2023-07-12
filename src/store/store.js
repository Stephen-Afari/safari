import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { RootReducer } from "./root-reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
  key: "root",
  storage,
  //   blacklist: ["user"],
};
const persistedReducer = persistReducer(persistConfig, RootReducer);
const middleWares = [logger];
const composedEnhancers = compose(applyMiddleware(...middleWares));
export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);
export const persistor = persistStore(store);
// export const persister = persistStore(store);
