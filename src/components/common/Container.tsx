import styled from "styled-components";

export const Container = styled.div`
  width: 1400px;
  margin: 0 auto;
  padding: 0px 30px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 100%;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
  }
`;