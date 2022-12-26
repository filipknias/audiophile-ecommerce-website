import { CategoryCard } from "components/app";
import { render } from "utilities/testUtils";

describe("category card component", () => {
  it("should display props", () => {
    const props = {
      image: "test-image.png",
      title: "test-category",
      href: "/test-href",
    }

    const { getByRole } = render(<CategoryCard {...props} />);
    const imageElement = getByRole('category-image');
    const titleElement = getByRole('category-title');
    const linkElement = getByRole('category-link');

    expect(imageElement).toHaveAttribute('src', props.image);
    expect(titleElement).toHaveTextContent(props.title);
    expect(linkElement).toHaveAttribute('href', props.href);
  });
});