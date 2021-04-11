import styled from "styled-components";
import { MdClose } from "react-icons/md";

export const Background = styled.div`
  max-width: 100%;
  width: 100%;
  height: 100%;
  background: rgba(159, 214, 214, 0.233);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div`
  width: 300px;
  height: 300px;
  box-shadow: 0 5px 16px rgb(159, 214, 214);
  background: rgb(70, 190, 190);
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

export const ModalContent = styled.div`
  display: flex;
  width: 300px;
  height: 300px;
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