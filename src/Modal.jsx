import styled from "styled-components";

const Box = styled.div`
  width: ${(props) => (props.modal2 ? "800px" : "600px")};
  height: 300px;
  background: ${(props) =>
    props.modal4 === "sky"
      ? "skyblue"
      : props.modal4 === "orange"
      ? "orange"
      : "#f6f6f6"};
  border-radius: ${(props) => (props.modal3 ? "50%" : "5px")};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: ${(props) => (props.modal1 ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

const Modal = (props) => {
  // console.log(props.modal1);
  const { setBttn } = props;
  console.log(setBttn);
  // console.log(props.modalprops1);

  // console.log(props);
  // modalprops1(전송매개체) = props(false)가 된다.
  // console.log(props.modalprops1) false

  // const [closed, setClosed] = useState(false);
  const CloseGo = () => {
    setBttn(false);
  };

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
        <div className="close" onClick={CloseGo}>
          x
        </div>
      </Box>
    </>
  );
};
export default Modal;
