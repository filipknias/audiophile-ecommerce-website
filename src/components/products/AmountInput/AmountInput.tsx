import { Amount, Button, Wrapper } from './styles';
import { useState } from 'react';

interface Props {
  amount: number;
  onAmountIncrease: () => void;
  onAmountDecrease: () => void;
}

export const AmountInput = ({ amount, onAmountIncrease, onAmountDecrease }: Props): JSX.Element => {
  return (
    <Wrapper>
      <Button onClick={onAmountDecrease}>-</Button>
      <Amount>{amount}</Amount>
      <Button onClick={onAmountIncrease}>+</Button>
    </Wrapper>
  )
}