import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./features/home/Home";

const AppRoutes = () => {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="" element={<Home />}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
};

export default AppRoutes;
