import styled from "styled-components";

export const SectionWrapper = styled.div`
  display: flex;
  gap: 60px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

export const FeaturesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 70%;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
  }
`;

export const FeaturesListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 30%;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: row;
    width: 100%;
    gap: 50px;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    justify-content: space-between;
  }
`;

export const FeaturesText = styled.p`
  line-height: 1.8;
  font-size: 1rem;
  color: ${({ theme }) => theme.text.dark};
`;

export const SectionHeader = styled.h1`
  font-size: 1.75rem;
  text-transform: uppercase;
`;

export const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FeaturesListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 15px;
  font-weight: ${({ theme }) => theme.fonts.light};
  color: ${({ theme }) => theme.text.dark};
  font-size: 1rem;
`;

export const FeatureAmount = styled.span`
  color: ${({ theme }) => theme.palette.orange};
  font-weight: ${({ theme }) => theme.fonts.bold};
`;