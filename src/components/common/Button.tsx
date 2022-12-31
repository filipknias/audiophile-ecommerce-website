import styled from "styled-components";

interface ButtonProps {
  full?: boolean;
}

const buttonBright = 'inset 0 0 100px 100px rgba(255, 255, 255, 0.2)';

const Button = styled.button<ButtonProps>`
  padding: 14px 32px;
  width: ${({ full }) => full ? '100%' : '200px'};
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: ${({ theme }) => theme.fonts.bold};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast} ease-in;
  border: none;
`;

export const OrangeButton = styled(Button)`
  background-color: ${({ theme }) => theme.palette.orange};
  color: ${({ theme }) => theme.text.white};
  &:hover {
    box-shadow: ${buttonBright};
  }
`;

export const BlackButton = styled(Button)`
  background-color: ${({ theme }) => theme.palette.black};
  color: ${({ theme }) => theme.text.white};
  &:hover {
    box-shadow: ${buttonBright};
  }
`;

export const OutlinedButton = styled(Button)`
  background: unset; 
  color: ${({ theme }) => theme.text.black};
  border: 1px solid ${({ theme }) => theme.text.black};
  &:hover {
    background-color: ${({ theme }) => theme.palette.black};
    color: ${({ theme }) => theme.text.white};
  }
`;