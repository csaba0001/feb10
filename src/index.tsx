import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import Feladat from "./pages/Feladat";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Counter from "./pages/Counter";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <a href="/flexfeladat">feb 10</a>
              <a href="/counter">feb 14</a>
            </div>
          }
        />
        <Route path="/flexfeladat" element={<Feladat />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
