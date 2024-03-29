import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App21";
import reportWebVitals from "./reportWebVitals";
import Counter from "./Counter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // ReactDOM.render : 브라우저에 있는 실제 DOM 내부에 리액트 컴포넌트를 렌더링
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
