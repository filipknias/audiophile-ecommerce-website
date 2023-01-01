import styled from "styled-components";

export const Hero = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.background.dark};
  color: ${({ theme }) => theme.text.white};
  text-transform: uppercase;
  line-height: 1.2;
  font-size: 2.5rem;
  font-weight: ${({ theme }) => theme.fonts.bold};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 250px;
`;