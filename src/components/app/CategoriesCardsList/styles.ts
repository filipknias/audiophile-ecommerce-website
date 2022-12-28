import styled from "styled-components";

export const CategoriesWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 40px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: 120px;
    flex-direction: column;
    margin-top: 7.5rem;
  }
`;