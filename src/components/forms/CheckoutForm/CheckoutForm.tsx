import { Stack, Header, Wrapper } from './styles';
import { BillingDetails } from './BillingDetails';
import { ShippingInfo } from './ShippingInfo';
import { PaymentDetails } from './PaymentDetails';

export const CheckoutForm = (): JSX.Element => {
  return (
    <Wrapper>
      <Header>Checkout</Header>
      <Stack>
        <BillingDetails />
        <ShippingInfo />
        <PaymentDetails />
      </Stack>
    </Wrapper>
  )
}