import { FormGroupHeader, FormContainer, FormGroup, FormLabel, FormLabelWrapper, FormErrorMessage } from "./styles";
import { TextInput } from "components/common";
import { useFormContext } from "react-hook-form";
import { FormValues, errorMessages, emailRegex } from "./types";

export const BillingDetails = (): JSX.Element => {
  const { register, formState: { errors } } = useFormContext<FormValues>();
  return (
    <>
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
    </>
  )
}