import styled from "styled-components";
import { Container } from "components/common";

export const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.background.dark};
`;

export const FooterContainer = styled(Container)`
  padding: 4.5rem 1rem 2rem 1rem;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 1rem;
    width: 100px;
    height: 4px;
    background-color: ${({ theme }) => theme.palette.orange};
  }
`;

export const FooterNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3rem;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
  }
`;

export const Brand = styled.h1`
  font-size: 30px;
  font-weight: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.text.white};
`;

export const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 35px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: 30px;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const FooterLink = styled.li`
  font-size: 15px;
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.text.white};
  letter-spacing: 3px;
`;

export const DescriptionGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  width: 50%;
  gap: 2rem;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
  }
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.text.light};
  font-weight: ${({ theme }) => theme.fonts.light};
  line-height: 1.6;
  font-size: 1rem;
`;

export const Copyright = styled.p`
  color: ${({ theme }) => theme.text.light};
  font-weight: ${({ theme }) => theme.fonts.light};
  font-size: 1rem;
`;