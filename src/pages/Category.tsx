import { getProductByCategory } from "utilities/products";
import { useParams } from "react-router-dom";
import { Hero } from "components/common";

export const Category = (): JSX.Element => {
  const params = useParams();
  const products = params.category ? getProductByCategory(params.category) : [];

  return (
    <>
      <Hero>{params.category}</Hero>
    </>
  )
}