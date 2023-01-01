import { ProductCard } from "components/products";
import { render } from "utilities/testUtils";
import { getProductById } from "utilities/products";

describe("product card component", () => {
  it("should display product card", () => {
    const mockProduct = getProductById(1);

    const { getByRole } = render(<ProductCard product={mockProduct} />);
    const titleElement = getByRole("product-title");
    const descriptionElement = getByRole("product-description");
    const linkElement = getByRole("product-link");

    expect(titleElement).toHaveTextContent(mockProduct.name);
    expect(descriptionElement).toHaveTextContent(mockProduct.description);
    expect(linkElement).toHaveAttribute("href", `/${mockProduct.category}/${mockProduct.slug}`);
  });
});