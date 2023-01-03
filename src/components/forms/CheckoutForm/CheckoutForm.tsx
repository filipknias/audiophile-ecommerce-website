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
  FormErrorMessage,
  FormLabelWrapper,
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

interface FormValues {
  name: string;
  email: string;
  phone: string;
  address: string;
  zipCode: string;
  city: string;
  country: string;
  eMoneyNumber?: string;
  eMoneyPin?: string;
}

export const CheckoutForm = (): JSX.Element => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<PaymentMethods>(PaymentMethods.E_MONEY);
  const { register, formState: { errors } } = useFormContext<FormValues>();

  console.log(errors)

  return (
    <Wrapper>
      <Header>Checkout</Header>
      <Stack>
        <FormGroupHeader>Billing details</FormGroupHeader>
        <FormContainer>
          <FormGroup>
            <FormLabelWrapper>
              <FormLabel>Name</FormLabel>
              {errors.name && errors.name.message && <FormErrorMessage>{errors.name.message}</FormErrorMessage>}
            </FormLabelWrapper>
            <TextInput 
              placeholder="Alexei Ward"
              valid={errors.name === undefined} 
              {...register("name", { required: errorMessages.required })} 
            />
          </FormGroup>
          <FormGroup>
            <FormLabelWrapper>
              <FormLabel>Email Address</FormLabel>
              {errors.email && errors.email.message && <FormErrorMessage>{errors.email.message}</FormErrorMessage>}
            </FormLabelWrapper>
            <TextInput
              placeholder="alexei@mail.com" 
              valid={errors.email === undefined} 
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
            <FormLabelWrapper>
              <FormLabel>Phone Number</FormLabel>
              {errors.phone && errors.phone.message && <FormErrorMessage>{errors.phone.message}</FormErrorMessage>}
            </FormLabelWrapper>
            <TextInput 
              placeholder="+1 202-555-0136"
              valid={errors.phone === undefined} 
              {...register("phone", {
                required: errorMessages.required,
                pattern: {
                  value: /^\d+$/,
                  message: errorMessages.pattern,
                },
              })} 
            />
          </FormGroup>
        </FormContainer>
        <FormGroupHeader>Shipping info</FormGroupHeader>
        <FormContainer>
          <FormGroup full>
            <FormLabelWrapper>
              <FormLabel>Your Address</FormLabel>
              {errors.address && errors.address.message && <FormErrorMessage>{errors.address.message}</FormErrorMessage>}
            </FormLabelWrapper>
            <TextInput 
              placeholder="1137 Williams Avenue" 
              valid={errors.address === undefined}
              {...register("address", { required: errorMessages.required })} 
            />
          </FormGroup>
          <FormGroup>
            <FormLabelWrapper>
              <FormLabel>ZIP Code</FormLabel>
              {errors.zipCode && errors.zipCode.message && <FormErrorMessage>{errors.zipCode.message}</FormErrorMessage>}
            </FormLabelWrapper>
            <TextInput 
              placeholder="10001"
              valid={errors.zipCode === undefined}
              {...register("zipCode", {
                required: errorMessages.required,
                pattern: {
                  value: /^\d+$/,
                  message: errorMessages.pattern,
                },
                minLength: {
                  value: 5,
                  message: errorMessages.pattern,
                },
                maxLength: {
                  value: 5,
                  message: errorMessages.pattern,
                }, 
              })} 
            />
          </FormGroup>
          <FormGroup>
            <FormLabelWrapper>
              <FormLabel>City</FormLabel>
              {errors.city && errors.city.message && <FormErrorMessage>{errors.city.message}</FormErrorMessage>}
            </FormLabelWrapper>
            <TextInput 
              placeholder="New York"
              valid={errors.city === undefined} 
              {...register("city", { required: errorMessages.required })} 
            />
          </FormGroup>
          <FormGroup>
            <FormLabelWrapper>
              <FormLabel>Country</FormLabel>
              {errors.country && errors.country.message && <FormErrorMessage>{errors.country.message}</FormErrorMessage>}
            </FormLabelWrapper>
            <TextInput 
              placeholder="United States"
              valid={errors.country === undefined}
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
                <FormLabelWrapper>
                  <FormLabel>e-Money Number</FormLabel>
                  {errors.eMoneyNumber && errors.eMoneyNumber.message && <FormErrorMessage>{errors.eMoneyNumber.message}</FormErrorMessage>}
                </FormLabelWrapper>
                <TextInput
                  placeholder="238521993"
                  valid={errors.eMoneyNumber === undefined}
                  {...register("eMoneyNumber", {
                    required: errorMessages.required,
                    pattern: {
                      value: /^\d+$/,
                      message: errorMessages.pattern,
                    },
                    minLength: {
                      value: 9,
                      message: errorMessages.pattern,
                    },
                    maxLength: {
                      value: 9,
                      message: errorMessages.pattern,
                    }, 
                  })}
                />
              </FormGroup>
              <FormGroup>
                <FormLabelWrapper>
                  <FormLabel>e-Money PIN</FormLabel>
                  {errors.eMoneyPin && errors.eMoneyPin.message && <FormErrorMessage>{errors.eMoneyPin.message}</FormErrorMessage>}
                </FormLabelWrapper>
                <TextInput
                  placeholder="6891"
                  valid={errors.eMoneyPin === undefined}
                  {...register("eMoneyPin", {
                    required: errorMessages.required,
                    pattern: {
                      value: /^\d+$/,
                      message: errorMessages.pattern,
                    },
                    minLength: {
                      value: 4,
                      message: errorMessages.pattern,
                    },
                    maxLength: {
                      value: 4,
                      message: errorMessages.pattern,
                    },  
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