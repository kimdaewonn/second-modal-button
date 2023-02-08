import styled from "styled-components";

const Box = styled.div`
  width: ${(props) => (props.modal2 ? "800px" : "600px")};
  display: ${(props) => (props.modal2 ? "none" : "flex")};
  height: 300px;
  background: ${(props) => (props.modal4 ? "skyblue" : "#f6f6f6")};
  border-radius: ${(props) => (props.modal3 ? "50%" : "5px")};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: ${(props) => (props.modal1 ? "none" : "flex")};
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;
// display: ${(props) => (props.modal2 ? "none" : "flex")}; 두개 가능?


const Modal = (props) => {
    console.log(props);
  // modalprops1(전송매개체) = props(false)가 된다.
  // bttn,size 등 값들 아닌듯 저서끝남? 맞는듯?아닌듯?
  // console.log(props.modalprops1) false

  return (
    <>
      <Box
        modal1={props.modalprops1}
        modal2={props.modalprops2}
        modal3={props.modalprops3}
        modal4={props.modalprops4}
  // props.modalprops1 = props(false)가 된다.
  // (전송매개체)modal1가 false가 된다.

      >
        모달
      </Box>
    </>
  );
};
export default Modal;
