import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Buttonn from "./Buttonn";
import Main from "./Main";
import Modal from "./Modal";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/buttonn" element={<Buttonn />}></Route>
          <Route path="/modal" element={<Modal />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
