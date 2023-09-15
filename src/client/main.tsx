import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, HashRouter as Router, Routes } from "react-router-dom";

import Home from "./Main/Home";
import Editor from "./Main/Editor";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Editor" element={<Editor />} />
      </Routes>
    </div>
  </BrowserRouter>
);
