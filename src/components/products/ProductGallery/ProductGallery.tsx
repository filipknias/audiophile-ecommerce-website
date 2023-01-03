import { Breakpoints } from "types/Product";
import { GalleryWrapper, GalleryImage, FirstImage, SecondImage, ThirdImage } from './styles';

interface Props {
  images: {
    first: Breakpoints;
    second: Breakpoints;
    third: Breakpoints;
  }
}

export const ProductGallery = ({ images }: Props): JSX.Element => {
  return (
    <GalleryWrapper>
      <FirstImage image={images.first}></FirstImage>
      <SecondImage image={images.second}></SecondImage>
      <ThirdImage image={images.third}></ThirdImage>
    </GalleryWrapper>
  )
}