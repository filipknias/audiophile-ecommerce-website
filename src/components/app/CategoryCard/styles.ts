import styled from "styled-components";

export const Card = styled.div`
  background-color: ${({ theme }) => theme.palette.gray};
  border-radius: 0.5rem;
  padding-top: 5.5rem;
  padding-bottom: 1.3rem;
  position: relative;
  &:hover p {
    color: ${({ theme }) => theme.palette.orange};
  }
`;

export const Image = styled.img`
  position: absolute;
  left: 50%;
  top: -40%;
  transform: translateY(40%);
  transform: translateX(-50%);
  height: 150px;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.text.black};
  font-weight: ${({ theme }) => theme.fonts.bold};
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 1.2rem;
  text-align: center;
`;

export const LinkGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: 10px;
  }
`;

export const CardLink = styled.p`
  color: ${({ theme }) => theme.text.dark};
  font-weight: ${({ theme }) => theme.fonts.bold};
  text-transform: uppercase;
  font-size: 0.8rem;
  text-align: center;
`;