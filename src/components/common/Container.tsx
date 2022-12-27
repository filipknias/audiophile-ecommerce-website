import styled from "styled-components";

export const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 0px 15px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
  }
`;