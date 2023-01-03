import { Navbar } from "components/app";
import { getCategories } from 'utilities/products';
import { render } from "utilities/testUtils";

describe("navbar component", () => {
  it("should display nav links", () => {
    const navItems = ['home', ...getCategories()];
    const { getAllByRole } = render(<Navbar />);
    const navLinks  = getAllByRole('nav-link');
    navLinks.forEach((link, idx) => {
      expect(link).toHaveTextContent(navItems[idx]);
    });
  });

  it("should display brand name", () => {
    const brandName = 'audiophile';
    const { getByRole } = render(<Navbar />);
    const brandHeading = getByRole('brand');
    expect(brandHeading).toHaveTextContent(brandName);
  });
});