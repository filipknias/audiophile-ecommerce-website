import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.palette.gray};
  font-weight: ${({ theme }) => theme.fonts.bold};
  transition: 0.2s ease-in;
  width: 100%;
  padding: 14px 0;
`;

export const Button = styled.button`
  background: none;
  border: none;
  text-align: center;
  flex: 1;
  cursor: pointer;
  font-weight: ${({ theme }) => theme.fonts.bold};
  font-size: 1rem;
  color: ${({ theme }) => theme.text.dark};
  &:hover {
    color: ${({ theme }) => theme.palette.orange};
  }
`;

export const Amount = styled.div`
  text-align: center;
  flex: 1;
  color: ${({ theme }) => theme.text.black};
  font-size: 1rem;
`;