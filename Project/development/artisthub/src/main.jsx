import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { RecoilRoot } from "recoil";
import counterReducer from "./store/counterSlice";
import crudReducer from "./store/crudSlice";
import App from "./App";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    crud: crudReducer,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </Provider>
);
