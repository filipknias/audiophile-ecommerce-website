import HeadphonesImage from 'assets/images/shared/desktop/image-headphones.png';
import SpeakersImage from 'assets/images/shared/desktop/image-speakers.png';
import EarphonesImage from 'assets/images/shared/desktop/image-earphones.png';
import { CategoryCard } from 'components/app';
import { CategoriesWrapper } from './styles';

export const CategoriesCardsList = (): JSX.Element => {
  return (
    <CategoriesWrapper>
      <CategoryCard image={HeadphonesImage} title="Headphones" href="/headphones" />
      <CategoryCard image={SpeakersImage} title="Speakers" href="/speakers" />
      <CategoryCard image={EarphonesImage} title="Earphones" href="/earphones" />
    </CategoriesWrapper>
  )
}