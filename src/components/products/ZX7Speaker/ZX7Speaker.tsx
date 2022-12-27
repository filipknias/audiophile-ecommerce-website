import { Wrapper, Content, Title } from './styles';
import { OutlinedButton } from 'components/common';
import SpeakerImage from 'assets/images/home/desktop/image-speaker-zx7.jpg';

export const ZX7Speaker = (): JSX.Element => {
  return (
    <Wrapper>
      <Content>
        <Title>ZX7 SPEAKER</Title>
        <OutlinedButton>See product</OutlinedButton>
      </Content>
    </Wrapper>
  )
}