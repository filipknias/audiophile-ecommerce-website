import {
  FooterWrapper,
  Brand,
  Copyright,
  Description,
  DescriptionGroup,
  FooterLink,
  FooterLinks,
  FooterNav,
  FooterContainer,
} from './styles';
import { Link } from 'react-router-dom';
import { getCategories } from 'utilities/products';

export const Footer = (): JSX.Element => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterNav>
          <Link to="/">
            <Brand>audiophile</Brand>
          </Link>
          <FooterLinks>
            <Link to="/">
              <FooterLink>Home</FooterLink>
            </Link>
            {getCategories().map((category) => (
              <Link to={`/${category}`} key={category}>
                <FooterLink>{category}</FooterLink>
              </Link>
            ))}
          </FooterLinks>
        </FooterNav>
        <DescriptionGroup>
          <Description>
            Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
          </Description>
          <Copyright>Copyright 2022. All Rights Reserved</Copyright>
        </DescriptionGroup>
      </FooterContainer>
    </FooterWrapper>
  )
}