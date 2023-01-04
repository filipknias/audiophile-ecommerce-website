import styled from "styled-components";

export const Wrapper = styled.div`
  background: url('/assets/images/home/desktop/pattern-circles.svg') no-repeat;
  background-color: ${({ theme }) => theme.palette.orange};
  display: flex;
  height: 600px;
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
  padding: 0 20px;
  gap: 60px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    gap: 40px;
    height: auto;
    padding: 40px;
  }
`;

export const Image = styled.img`
  flex: 1;
  height: 80%;
  align-self: flex-end;
  object-fit: contain;
  transform: translateY(3%);
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    align-self: center;
    width: 150px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  flex: 1;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    align-items: center;
    text-align: center;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.text.white};
  font-weight: ${({ theme }) => theme.fonts.bold};
  font-size: 3.5rem;
  text-transform: uppercase;
  letter-spacing: 5px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 2.5rem;
  }
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.text.white};
  font-weight: ${({ theme }) => theme.fonts.light};
  font-size: 1rem;
  width: 70%;
  line-height: 1.5;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 80%;
  }
`;