import {
  Stack,
  FormContainer,
  FormGroup,
  FormGroupHeader,
  Header,
  Wrapper,
  FormLabel,
  RadioGroup,
  PaymentMethodImage,
  PaymentMethodText,
  PaymentMethodWrapper,
} from './styles';
import CashOnDeliveryImage from 'assets/images/checkout/icon-cash-on-delivery.svg';
import { TextInput, RadioButton } from 'components/common';
import { useState } from 'react';

enum PaymentMethods {
  E_MONEY = "e-money",
  CASH_ON_DELIVERY = "cash-on-delivery",
}

export const CheckoutForm = (): JSX.Element => {
  const [eMoneyActive, setEMoneyActive] = useState(true);
  const [cashOnDeliveryActive, setCashOnDeliveryActive] = useState(false);

  const handlePaymentMethodChange = (paymentMethod: PaymentMethods) => {
    if (paymentMethod === PaymentMethods.E_MONEY) {
      setEMoneyActive(true);
      setCashOnDeliveryActive(false);
    } else {
      setCashOnDeliveryActive(true);
      setEMoneyActive(false);
    }
  }

  return (
    <Wrapper>
      <Header>Checkout</Header>
      <Stack>
        <FormGroupHeader>Billing details</FormGroupHeader>
        <FormContainer>
          <FormGroup>
            <FormLabel>Name</FormLabel>
            <TextInput placeholder="Alexei Ward" />
          </FormGroup>
          <FormGroup>
            <FormLabel>Email Address</FormLabel>
            <TextInput placeholder="alexei@mail.com" />
          </FormGroup>
          <FormGroup>
            <FormLabel>Phone Number</FormLabel>
            <TextInput placeholder="+1 202-555-0136" />
          </FormGroup>
        </FormContainer>
        <FormGroupHeader>Shipping info</FormGroupHeader>
        <FormContainer>
          <FormGroup full>
            <FormLabel>Your Address</FormLabel>
            <TextInput placeholder="1137 Williams Avenue" />
          </FormGroup>
          <FormGroup>
            <FormLabel>ZIP Code</FormLabel>
            <TextInput placeholder="10001" />
          </FormGroup>
          <FormGroup>
            <FormLabel>City</FormLabel>
            <TextInput placeholder="New York" />
          </FormGroup>
          <FormGroup>
            <FormLabel>Country</FormLabel>
            <TextInput placeholder="United States" />
          </FormGroup>
        </FormContainer>
        <FormGroupHeader>Payment details</FormGroupHeader>
        <FormContainer>
          <FormLabel>Payment Method</FormLabel>
          <RadioGroup>
            <RadioButton 
              checked={eMoneyActive} 
              label="e-Money" 
              onChange={() => handlePaymentMethodChange(PaymentMethods.E_MONEY)} 
            /> 
            <RadioButton 
              checked={cashOnDeliveryActive} 
              label="Cash on Delivery" 
              onChange={() => handlePaymentMethodChange(PaymentMethods.CASH_ON_DELIVERY)} 
            /> 
          </RadioGroup>
          {eMoneyActive ? (
            <>  
              <FormGroup>
                <FormLabel>e-Money Number</FormLabel>
                <TextInput placeholder="238521993" />
              </FormGroup>
              <FormGroup>
                <FormLabel>e-Money PIN</FormLabel>
                <TextInput placeholder="6891" />
              </FormGroup>
            </>
          ) : (
            <PaymentMethodWrapper>
              <PaymentMethodImage src={CashOnDeliveryImage} alt="payment-method-image" />
              <PaymentMethodText>The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</PaymentMethodText>
            </PaymentMethodWrapper>
          )}
        </FormContainer>
      </Stack>
    </Wrapper>
  )
}