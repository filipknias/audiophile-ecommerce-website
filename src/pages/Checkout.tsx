import { Container } from "components/common";
import styled from "styled-components";
import { CheckoutForm } from "components/forms";

export const GoBackLabel = styled.span`
  color: ${({ theme }) => theme.text.dark};
  font-weight: ${({ theme }) => theme.fonts.light};
  font-size: 1rem;
  cursor: pointer;
  margin: 2rem 0;
  display: block;
  width: fit-content;
  &:hover {
    text-decoration: underline;
  }
`;

export const Checkout = (): JSX.Element => {
  return (
    <Container>
      <GoBackLabel>Go Back</GoBackLabel>
      <CheckoutForm />
    </Container>
  )
}