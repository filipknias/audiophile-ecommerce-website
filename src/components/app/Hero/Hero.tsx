import { Wrapper, HeroImage, NewProductText, Description, Title, HeroContent } from './styles';
import { Container } from 'components/common/Container';
import { OrangeButton } from 'components/common/Button';

export const Hero = (): JSX.Element => {
  return (
    <Wrapper>
      <Container>
        <HeroImage>
          <HeroContent>
            <NewProductText>New product</NewProductText>
            <Title>XX99 MARK II HEADPHONES</Title>
            <Description>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</Description>
            <OrangeButton>See product</OrangeButton>
          </HeroContent>
        </HeroImage>
      </Container>
    </Wrapper>
  )
}