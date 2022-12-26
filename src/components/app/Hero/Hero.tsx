import { Wrapper, HeroImage, NewProductText, Description, Title, HeroContent } from './styles';
import { OrangeButton, Container } from 'components/common';

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