import { Wrapper, HeroImage, NewProductText, Description, Title, HeroContent } from './styles';
import { OrangeButton, Container } from 'components/common';
import { Link } from 'react-router-dom';

export const ProductHero = (): JSX.Element => {
  return (
    <Wrapper>
      <Container>
        <HeroImage>
          <HeroContent>
            <NewProductText>New product</NewProductText>
            <Title>XX99 MARK II HEADPHONES</Title>
            <Description>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</Description>
            <Link to="/headphones/xx99-mark-two-headphones">
              <OrangeButton>See product</OrangeButton>
            </Link>
          </HeroContent>
        </HeroImage>
      </Container>
    </Wrapper>
  )
}