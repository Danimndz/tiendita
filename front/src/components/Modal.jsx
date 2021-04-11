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
import PriceReview from "./PriceReview";
import { useHistory } from "react-router";
/**
 * @param {function} setShowModal - function that returns true or false to manage the Modal.
 * @param {boolean} showModal - variable from the function setShowModal.
 * @param {Object} producto - specific product.
 * @param {int} from - checks from where is called the form.
 */
const Modal = ({ showModal, setShowModal, producto, from }) => {
  const history = useHistory();
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
                {from === 0 ? (
                  <PriceReview />
                ) : (
                  <ProductSelector
                    setShowModal={setShowModal}
                    showModal={showModal}
                    producto={producto}
                  />
                )}
              </ModalContent>
              {from === 1 ? (
                <CloseModalButton
                  onClick={() => setShowModal((value) => !value)}
                />
              ) : (
                <CloseModalButton onClick={() => history.go()} />
              )}
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};

export default Modal;
