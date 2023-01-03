import styled from "styled-components";

interface TextInputProps {
  valid?: boolean;
}

export const TextInput = styled.input<TextInputProps>`
  transition: all ${({ theme }) => theme.transitions.fast} ease-in;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-weight: ${({ theme }) => theme.fonts.normal};
  padding: 0.8rem 1rem;
  font-size: 1rem;
  border: 1px solid ${({ theme, valid = true }) => valid ? theme.palette.light : theme.palette.red};
  color: ${({ theme }) => theme.text.black};
  outline: none;
  &:focus {
    border: 1px solid ${({ theme }) => theme.palette.orange};
  }
`;