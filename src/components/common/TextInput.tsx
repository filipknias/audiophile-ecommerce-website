import styled from "styled-components";

export const TextInput = styled.input`
  transition: all ${({ theme }) => theme.transitions.fast} ease-in;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-weight: ${({ theme }) => theme.fonts.normal};
  padding: 0.8rem 1rem;
  font-size: 1rem;
  border: 1px solid ${({ theme }) => theme.palette.light};
  color: ${({ theme }) => theme.text.black};
  outline: none;
  &:focus {
    border: 1px solid ${({ theme }) => theme.palette.orange};
  }
`;