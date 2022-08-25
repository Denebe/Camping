import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Detail, Search, Equip } from "./pages";
import Nav from "./components/navbar";
const App = () => {
  return (
    <BrowserRouter>
      <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/equip" element={<Equip />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/search" element={<Search />} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;
