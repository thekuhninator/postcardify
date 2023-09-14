import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

import Home from "./Main/Home";
import Editor from "./Main/Editor";
import Header from "./Main/shared/Header";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Routes>   
        <Route path='/' element={<Home />} />
        <Route path='/Editor' element={<Editor />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
