import React from "react";
import { useSpring } from "@react-spring/core";
import { animated } from "@react-spring/web";
import {
  Background,
  ModalWrapper,
  ModalContent,
  CloseModalButton,
} from "../styled-components";
import ProductSelector from "./ProductSelector";
/**
 * @param {function} setShowModal - function that returns true or false to manage the Modal.
 * @param {boolean} showModal - variable from the function setShowModal.
 * @param {Object} producto - specific product.
 */
const Modal = ({ showModal, setShowModal, producto }) => {
  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });
  return (
    <>
      {showModal ? (
        <Background>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalContent>
                <ProductSelector
                  setShowModal={setShowModal}
                  showModal={showModal}
                  producto={producto}
                />
              </ModalContent>
              <CloseModalButton
                onClick={() => setShowModal((value) => !value)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};

export default Modal;
