import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";

//selector
const VADIVELU_COMEDY = "VADIVELU_COMEDY";
const GOUNDAMANI_COMEDY = "GOUNDAMANI_COMEDY";

//Redux Actions
const vadiveluComedyAction = () => {
  return { type: VADIVELU_COMEDY };
};
const goundamaniComedyAction = () => ({ type: GOUNDAMANI_COMEDY });

//Redux Reducer
const comedyReducer = (state, actions) => {
  switch (actions.type) {
    case VADIVELU_COMEDY:
      return (state = "Kaduppeththuraar My Lord");
    case GOUNDAMANI_COMEDY:
      return (state = "Arasiyalula Ithellaam Saatharanamappa");
    default:
      return (state = "No Comedy Selected");
  }
};

//Redux Store
let store = createStore(comedyReducer);
store.subscribe(() => {
  console.log(store.getState());
});

//Redux Dispatch
store.dispatch(vadiveluComedyAction());
store.dispatch(goundamaniComedyAction());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
