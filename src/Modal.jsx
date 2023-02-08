import styled from "styled-components";

const Box = styled.div`
  width: ${(props) => (props.modal3 ? "800px" : "600px")};
  display: ${(props) => (props.modal3 ? "none" : "flex")};
  height: 300px;
  background: ${(props) => (props.modal5 ? "skyblue" : "#f6f6f6")};
  border-radius: ${(props) => (props.modal4 ? "50%" : "5px")};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: ${(props) => (props.modal2 ? "none" : "flex")};
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

const Modal = (props) => {
  //   console.log(props);

  return (
    <>
      <Box
        modal2={props.modalprops1}
        modal3={props.modalprops2}
        modal4={props.modalprops3}
        modal5={props.modalprops4}
      >
        모달
      </Box>
    </>
  );
};
export default Modal;
