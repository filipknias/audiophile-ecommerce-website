import { getProductByCategory } from "utilities/products";
import { useParams } from "react-router-dom";

export const Category = (): JSX.Element => {
  const params = useParams();
  const products = params.category ? getProductByCategory(params.category) : [];

  return (
    <div></div>
  )
}