import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import Nav from "./components/navbar";
import Store from "./components/datastore";
const App = () => {
  return (
    <BrowserRouter>
      <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;
