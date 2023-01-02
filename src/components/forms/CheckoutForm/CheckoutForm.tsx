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
import { useFormContext } from "react-hook-form";
import { PaymentMethods } from 'data/constants';

const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const errorMessages = {
  required: "Field cannot be empty",
  pattern: "Wrong format",
}

export const CheckoutForm = (): JSX.Element => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<PaymentMethods>(PaymentMethods.E_MONEY);
  const { register, handleSubmit, formState: { errors } } = useFormContext();

  console.log(errors)

  return (
    <Wrapper>
      <Header>Checkout</Header>
      <Stack>
        <FormGroupHeader>Billing details</FormGroupHeader>
        <FormContainer>
          <FormGroup>
            <FormLabel>Name</FormLabel>
            <TextInput 
              placeholder="Alexei Ward" 
              {...register("name", { required: errorMessages.required })} 
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>Email Address</FormLabel>
            <TextInput 
              placeholder="alexei@mail.com" 
              {...register("email", {
                required: errorMessages.required, 
                pattern: {
                  value: emailRegex,
                  message: errorMessages.pattern,
                } 
              })} 
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>Phone Number</FormLabel>
            <TextInput 
              placeholder="+1 202-555-0136" 
              {...register("phone", {
                required: errorMessages.required, 
                valueAsNumber: true,
            })} 
            />
          </FormGroup>
        </FormContainer>
        <FormGroupHeader>Shipping info</FormGroupHeader>
        <FormContainer>
          <FormGroup full>
            <FormLabel>Your Address</FormLabel>
            <TextInput 
              placeholder="1137 Williams Avenue" 
              {...register("address", { required: errorMessages.required })} 
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>ZIP Code</FormLabel>
            <TextInput 
              placeholder="10001" 
              {...register("zipCode", {
                required: errorMessages.required, 
                valueAsNumber: true,
                pattern: {
                  value: /^\d{5}$/,
                  message: errorMessages.pattern
                } 
              })} 
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>City</FormLabel>
            <TextInput 
              placeholder="New York" 
              {...register("city", { required: errorMessages.required })} 
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>Country</FormLabel>
            <TextInput 
              placeholder="United States" 
              {...register("country", { required: errorMessages.required })} 
            />
          </FormGroup>
        </FormContainer>
        <FormGroupHeader>Payment details</FormGroupHeader>
        <FormContainer>
          <FormLabel>Payment Method</FormLabel>
          <RadioGroup>
            <RadioButton 
              checked={selectedPaymentMethod === PaymentMethods.E_MONEY} 
              label="e-Money" 
              onChange={() => setSelectedPaymentMethod(PaymentMethods.E_MONEY)} 
            /> 
            <RadioButton 
              checked={selectedPaymentMethod === PaymentMethods.CASH_ON_DELIVERY} 
              label="Cash on Delivery" 
              onChange={() => setSelectedPaymentMethod(PaymentMethods.CASH_ON_DELIVERY)} 
            /> 
          </RadioGroup>
          {selectedPaymentMethod === PaymentMethods.E_MONEY ? (
            <>  
              <FormGroup>
                <FormLabel>e-Money Number</FormLabel>
                <TextInput
                  placeholder="238521993" 
                  {...register("eMoneyNumber", {
                    required: errorMessages.required, 
                    valueAsNumber: true, 
                    pattern: {
                      value: /^\d{9}$/ ,
                      message: errorMessages.pattern,
                    }
                  })}
                />
              </FormGroup>
              <FormGroup>
                <FormLabel>e-Money PIN</FormLabel>
                <TextInput
                  placeholder="6891"
                  {...register("eMoneyPin", {
                    required: errorMessages.required, 
                    valueAsNumber: true, 
                    pattern: {
                      value: /^\d{4}$/,
                      message: errorMessages.pattern,
                    } 
                  })}
                />
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