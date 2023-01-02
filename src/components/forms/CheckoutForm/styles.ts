import styled from "styled-components";

interface FormGroupProps {
  full?: boolean;
}

export const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.background.white};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 3rem;
  margin-bottom: 2rem;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    padding: 2rem 1.5rem;
  }
`;

export const Header = styled.h1`
  font-weight: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.text.black};
  font-size: 1.75rem;
  margin-bottom: 2rem;
  text-transform: uppercase;
`;

export const FormGroupHeader = styled.span`
  text-transform: uppercase;
  color: ${({ theme }) => theme.palette.orange};
  font-size: 0.8rem;
  font-weight: ${({ theme }) => theme.fonts.bold};
  letter-spacing: 0.5px;
  display: block;
`;

export const FormContainer = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
`;

export const FormGroup = styled.div<FormGroupProps>`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  grid-column-start: ${({ full }) => full ? 1 : 'auto'};
  grid-column-end: ${({ full }) => full ? 3 : 'auto'};
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-column-start: auto;
    grid-column-end: auto;
  }
`;

export const FormLabel = styled.label`
  color: ${({ theme }) => theme.text.black};
  font-size: 0.9rem;
  font-weight: ${({ theme }) => theme.fonts.bold};
`;

export const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;