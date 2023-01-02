import { Container } from "components/common";
import styled from "styled-components";
import { CheckoutForm } from "components/forms";
import { CartSummary } from "components/app";
import { useForm, FormProvider, useFormContext } from "react-hook-form";

const GoBackLabel = styled.span`
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

const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

export const Checkout = (): JSX.Element => {
  const methods = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <FormProvider {...methods} >
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Container>
          <GoBackLabel>Go Back</GoBackLabel>
          <Wrapper>
            <div style={{ flex: 1 }}>
              <CheckoutForm />
            </div>
            <CartSummary onSubmit={methods.handleSubmit(onSubmit)} />
          </Wrapper>
        </Container>
      </form>
    </FormProvider>
  )
}