import styled from "styled-components";

interface Props {
  checked: boolean;
  label: string;
  onChange: () => void;
}

interface WrapperProps {
  active: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid ${({ theme, active }) => active ? theme.palette.orange : theme.palette.light};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 1rem;
  cursor: pointer;
`;

const Label = styled.span`
  color: ${({ theme }) => theme.text.black};
  font-weight: ${({ theme }) => theme.fonts.normal};
  font-size: 1rem 2rem;
`;

const InputIndicator = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.palette.orange};
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: none;
`;

const DefaultInput = styled.input`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
`;

const InputWrapper = styled.div`
  position: relative;
  border: 1px solid ${({ theme }) => theme.palette.light};
  border-radius: 50%;
  width: 20px;
  height: 20px;
  & ${DefaultInput}:checked ~ ${InputIndicator} {
    display: block;
  }
`;

export const RadioButton = ({ checked, label, onChange }: Props): JSX.Element => {
  return (
    <Wrapper onClick={onChange} active={checked}>
      <InputWrapper>
        <DefaultInput type="radio" checked={checked} />
        <InputIndicator></InputIndicator>
      </InputWrapper>
      <Label>{label}</Label>
    </Wrapper>
  )
}