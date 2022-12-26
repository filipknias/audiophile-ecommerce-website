import { Card, Image, CardLink, Title, LinkGroup } from './styles';
import ArrowRight from 'assets/images/shared/desktop/icon-arrow-right.svg';
import { Link } from 'react-router-dom';

interface Props {
  image: string;
  title: string;
  href: string;
}

export const CategoryCard = ({ image, title, href }: Props): JSX.Element => {
  return (
    <Link to={href} style={{ width: '100%' }} role="category-link">
      <Card>
        <Image src={image} alt={`${title}-image`} role="category-image" />
        <Title role="category-title">{title}</Title>
        <LinkGroup>
          <CardLink>Shop</CardLink>
          <img src={ArrowRight} alt="arrow-right" />
        </LinkGroup>
      </Card>
    </Link>
  )
}