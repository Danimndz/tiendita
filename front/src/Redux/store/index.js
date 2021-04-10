import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { productos } from "../reducers/productos";

const initialState = {
  productos: [],
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  productos,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);
