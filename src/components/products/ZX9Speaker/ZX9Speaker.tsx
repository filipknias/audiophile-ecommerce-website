import { Wrapper, Title, Image, Description, Content } from './styles';
import SpeakerImage from 'assets/images/home/desktop/image-speaker-zx9.png';
import { BlackButton } from 'components/common';

export const ZX9Speaker = (): JSX.Element => {
  return (
    <Wrapper>
      <Image src={SpeakerImage} alt="speakers-image" />
      <Content>
        <Title>ZX9 <br /> SPEAKER</Title>
        <Description>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</Description>
        <BlackButton>See product</BlackButton>
      </Content>
    </Wrapper>
  )
}