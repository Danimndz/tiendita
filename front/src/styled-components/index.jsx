import styled from "styled-components";
import { MdClose } from "react-icons/md";

export const Background = styled.div`
  max-width: 100%;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: rgb(29, 29, 29);
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

export const ModalContent = styled.div`
  display: flex;
  width: 800px;
  height: 500px;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
`;

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

export const Button = styled.div`
  padding: 1px 20px;
  border-radius: 4px;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
  height: 40px;
  width: 20px;
  align-content: center;
  background-color: rgb(19, 16, 16);
`;