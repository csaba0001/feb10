import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import Feladat from "./pages/Feladat";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Counter from "./pages/Counter";
import Layout from "./pages/Layout";
import Kerteszet from "./pages/kerteszet";
import BackButton from "./pages/BackButton";
import Algoritmusok from "./pages/Algoritmusok";

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
              <a href="/algo">feb 7</a>
              <a href="/flexfeladat">feb 10</a>
              <a href="/counter">feb 14</a>
              <a href="/kerteszet">feb 17</a>
              <a href="/layout">feb 21</a>
            </div>
          }
        />
        <Route
          path="/flexfeladat"
          element={
            <div>
              {" "}
              <BackButton /> <Feladat />{" "}
            </div>
          }
        />
        <Route
          path="/counter"
          element={
            <div>
              {" "}
              <BackButton /> <Counter />{" "}
            </div>
          }
        />
        <Route
          path="/layout"
          element={
            <div>
              {" "}
              <BackButton /> <Layout />{" "}
            </div>
          }
        />
        <Route
          path="/kerteszet"
          element={
            <div>
              {" "}
              <BackButton /> <Kerteszet />{" "}
            </div>
          }
        />
        <Route
          path="/algo"
          element={
            <div>
              {" "}
              <BackButton /> <Algoritmusok />{" "}
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
