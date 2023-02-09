import React from "react";
import Buttonn from "./Buttonn";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <h1>Main 페이지입니다.</h1>

      <Link className="buttonn" to="/buttonn">
        버튼구경
      </Link>
      <Link className="modal" to="/modal">
        모달구경
      </Link>
      <Link className="selector" to="/selector">
        셀렉터 구경
      </Link>
      <Buttonn></Buttonn>
    </>
  );
};

export default Main;
