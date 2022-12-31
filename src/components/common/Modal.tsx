import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
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
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 90%;
    margin: 0 auto;
  }
`;

interface Props {
  children: JSX.Element;
}

export const Modal = ({ children }: Props): JSX.Element => {
  return (
    <Overlay>
      <ModalWrapper>
        {children}
      </ModalWrapper>
    </Overlay>
  )
};