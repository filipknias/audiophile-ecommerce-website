import { getProductByCategory } from "utilities/products";
import { useParams } from "react-router-dom";
import { TextHero } from "components/common";

export const Category = (): JSX.Element => {
  const params = useParams();
  const products = params.category ? getProductByCategory(params.category) : [];

  return (
    <>
      <TextHero>{params.category}</TextHero>
    </>
  )
}