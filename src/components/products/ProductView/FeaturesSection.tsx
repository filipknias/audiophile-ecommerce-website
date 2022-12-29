import { 
  SectionWrapper, 
  FeaturesListWrapper, 
  FeaturesText, 
  FeaturesWrapper, 
  SectionHeader, 
  FeaturesList, 
  FeaturesListItem,
  FeatureAmount,
} from './styles';

interface Props {
  featuresText: string;
  includedItems: { quantity: number; item: string; }[];
}

export const FeaturesSection = ({ featuresText, includedItems }: Props): JSX.Element => {
  return (
    <SectionWrapper>
      <FeaturesWrapper>
        <SectionHeader>Features</SectionHeader>
        <FeaturesText>{featuresText}</FeaturesText>
      </FeaturesWrapper>
      <FeaturesListWrapper>
        <SectionHeader>In the box</SectionHeader>
        <FeaturesList>
          {includedItems.map(({ item, quantity }) => (
            <FeaturesListItem key={item}>
              <FeatureAmount>{quantity}x</FeatureAmount>
              {item}
            </FeaturesListItem>
          ))}
        </FeaturesList>
      </FeaturesListWrapper>
    </SectionWrapper>
  )
}