import styled from "styled-components";

export const Wrapper = styled.div`
  background: url('/src/assets/images/home/desktop/image-speaker-zx7.jpg') no-repeat;
  background-size: cover; 
  background-position: bottom;
  border-radius: ${({ theme }) => theme.borderRadius};
  position: relative;
  height: 300px;
  color: ${({ theme }) => theme.text.black};
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    background-image: url('/src/assets/images/home/tablet/image-speaker-zx7.jpg');
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    background-image: url('/src/assets/images/home/mobile/image-speaker-zx7.jpg');
  }
`;

export const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 6rem;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    left: 4rem;
  }
`;

export const Title = styled.h1`
  font-size: 1.75rem;
`;