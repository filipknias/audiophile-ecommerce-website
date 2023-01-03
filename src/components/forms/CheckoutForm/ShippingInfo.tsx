import { FormGroupHeader, FormContainer, FormGroup, FormLabel, FormLabelWrapper, FormErrorMessage } from "./styles";
import { TextInput } from "components/common";
import { useFormContext } from "react-hook-form";
import { errorMessages, FormValues } from "./types";

export const ShippingInfo = (): JSX.Element => {
  const { register, formState: { errors } } = useFormContext<FormValues>();
  return (
    <>
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
    </>
  )
}