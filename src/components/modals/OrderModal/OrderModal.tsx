import { Wrapper, Header, Description } from './styles';
import { Modal, OrangeButton } from "components/common";
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'redux/hooks';
import { hideModal } from 'redux/features/modalSlice';
import { clearCart } from 'redux/features/cartSlice';

export const OrderModal = (): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleButtonClick = () => {
    navigate("/");
    dispatch(hideModal());
    dispatch(clearCart());
  };

  return (
    <Modal>
      <Wrapper>
        <Header>Thank you for your order</Header>
        <Description>You will receive an email confirmation shortly.</Description>
        <OrangeButton full onClick={handleButtonClick}>Back to home</OrangeButton>
      </Wrapper>
    </Modal>
  )
}