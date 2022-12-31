import styled from "styled-components";
import { useClickOutside } from "hooks/useClickOutside";
import { useRef } from "react";
import { useAppDispatch } from "redux/hooks";
import { hideModal } from "redux/features/modalSlice";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.background.modal};
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 1rem;
  }
`;

const ModalWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 4rem;
  transform: translateX(-50%);
  background-color: ${({ theme }) => theme.background.light};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 2rem 1rem;
  width: 500px;
  animation: ${({ theme }) => `${theme.animations.fade} ${theme.transitions.fast} ease-in`};
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 90%;
    margin: 0 auto;
  }
`;

interface Props {
  children: JSX.Element;
}

export const Modal = ({ children }: Props): JSX.Element => {
  const modalRef = useRef<HTMLDivElement|null>(null);
  const dispatch = useAppDispatch();

  useClickOutside(modalRef, () => {
    dispatch(hideModal());
  });

  return (
    <Overlay>
      <ModalWrapper ref={modalRef}>
        {children}
      </ModalWrapper>
    </Overlay>
  )
};