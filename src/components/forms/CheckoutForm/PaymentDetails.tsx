import {
  FormGroupHeader, 
  FormContainer, 
  FormGroup, 
  FormLabel, 
  FormLabelWrapper, 
  FormErrorMessage,
  PaymentMethodImage,
  PaymentMethodText,
  PaymentMethodWrapper,
  RadioGroup
} from "./styles";
import { TextInput, RadioButton } from "components/common";
import { useFormContext } from "react-hook-form";
import { FormValues, errorMessages } from "./types";
import { useState } from "react";
import { PaymentMethods } from "data/constants";
import CashOnDeliveryImage from '/assets/images/checkout/icon-cash-on-delivery.svg';

export const PaymentDetails = (): JSX.Element => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<PaymentMethods>(PaymentMethods.E_MONEY);
  const { register, formState: { errors } } = useFormContext<FormValues>();
  return (
    <>
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
    </>
  )
}