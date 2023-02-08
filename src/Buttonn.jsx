import React from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import styled from "styled-components";
import { useState } from "react";
import Modal from "./Modal";

const Btn = styled.div`
  width: 100px;
  height: 50px;
  background: #000;
  color: #fff;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  cursor: pointer;
`;

const Buttonn = () => {
  const [bttn, setBttn] = useState(false);
  const [size, setSize] = useState(false);
  const [round, setRound] = useState(false);
  console.log(round);

  return (
    <>
      <Btn
        onClick={() => {
          setSize(!size);
        }}
      >
        width
      </Btn>
      <ButtonGroup
        className="buttongroup1"
        variant="outlined"
        aria-label="outlined button group"
      >
        <Button
          onClick={() => {
            setBttn(!bttn);
          }}
        >
          ON-Off
        </Button>
        <Button
          onClick={() => {
            setRound(!round);
          }}
        >
          Round
        </Button>
        {/* <Button>Three</Button> */}
      </ButtonGroup>
      <Modal modalprops1={bttn} modalprops2={size} modalprops3={round}></Modal>
    </>
  );
};

export default Buttonn;