import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Explore from "./pages/Explore";

import { DAppProvider } from "@usedapp/core";
import NFTDetail from "./pages/NFTDetail";

ReactDOM.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<DAppProvider config={{}}><Home /></DAppProvider>} />
        <Route path="/create" element={<DAppProvider><Create /></DAppProvider>} />
        <Route path="/explore" element={<DAppProvider config={{}}><Explore /></DAppProvider>} />
        <Route path="/detail" element={<DAppProvider config={{}}><NFTDetail /></DAppProvider>} />

      </Routes>
    </BrowserRouter>,
  document.getElementById("root")
);
 
reportWebVitals();
