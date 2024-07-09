import { createStore, compose } from "redux";
import combinedReducers from "./reducers";

const composeEnhancers =
  (import.meta.env.VITE_APP_NODE_ENV !== "production" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const Store = createStore(combinedReducers, composeEnhancers());

export default Store;
