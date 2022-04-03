import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import { addItem } from "./actions/cartItems";
import bike from "../src/assets/bike.png";
import roadBike from '../src/assets/road-bike.png';
import helmet from '../src/assets/helmet.jpg';
import wheel from '../src/assets/bicycle-wheel.jpg';
import mountainBike from '../src/assets/mountain-bike.png'
import selectItems from '../src/selectors/items'


import App from "./App";

const store = configureStore();

store.dispatch(addItem({ name: "Blue Bike", price: 300, quantity: 0, picture: bike}));
store.dispatch(addItem({ name: "Red Bike", price: 450, quantity: 0, picture: roadBike}));
store.dispatch(addItem({ name: "Helmet", price: 30, quantity: 0, picture: helmet}));
store.dispatch(addItem({ name: "Mountain Bike", price: 500, quantity: 0, picture: mountainBike}));
store.dispatch(addItem({ name: "Wheel", price: 70, quantity: 0, picture: wheel}));



const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("root"));
