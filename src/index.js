import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import { addItem } from "./actions/cartItems";
import bike from "../src/assets/bike.png";

import App from "./App";

const store = configureStore();

store.dispatch(addItem({ name: "bike", price: 4500, quantity: 0, picture: bike}));

console.log(store.getState());

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("root"));
