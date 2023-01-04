import HeadphonesImage from '/assets/images/shared/desktop/image-headphones.png';
import SpeakersImage from '/assets/images/shared/desktop/image-speakers.png';
import EarphonesImage from '/assets/images/shared/desktop/image-earphones.png';
import { CategoryCard } from 'components/products';
import { Wrapper } from './styles';

export const ProductCategories = (): JSX.Element => {
  return (
    <Wrapper>
      <CategoryCard image={HeadphonesImage} title="Headphones" href="/headphones" />
      <CategoryCard image={SpeakersImage} title="Speakers" href="/speakers" />
      <CategoryCard image={EarphonesImage} title="Earphones" href="/earphones" />
    </Wrapper>
  )
}