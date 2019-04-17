import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import cartReducer from "./Apps/cart/cartReducer";
import { Provider } from "react-redux";
import { createStore } from "redux";

//createStore: which allows us to create a store that holds all of our state tree of our app
//createStore component takes a reducer as a parameter, we called it cartReducer
//Reducers specify how the application’s state changes in response to actions sent to the store.
const store = createStore(cartReducer);

//Provider: which will basically wrap our App component. It will simply allow us to pass our store into the props
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
