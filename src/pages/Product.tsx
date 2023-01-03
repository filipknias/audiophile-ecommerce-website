import { useParams, useNavigate } from "react-router-dom";
import { getProductBySlug } from "utilities/products";
import { ProductView } from "components/products";
import { Container } from "components/common";

export const Product = (): JSX.Element => {
  const params = useParams();
  const navigate = useNavigate();
  const slug = params.slug ? params.slug : null;

  const product = slug ? getProductBySlug(slug) : navigate("/");

  return (
    <Container>
      <>
        {product && <ProductView product={product} />}
      </>
    </Container>
  )
}