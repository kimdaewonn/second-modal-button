import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Buttonn from "./Buttonn";
import Main from "./Main";
import Modal from "./Modal";
import Selector from "./Selector";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/buttonn" element={<Buttonn />}></Route>
          <Route path="/modal" element={<Modal />}></Route>
          <Route path="/selector" element={<Selector />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
