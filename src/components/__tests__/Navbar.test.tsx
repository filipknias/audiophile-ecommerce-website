import { Navbar } from "components/app";
import { getCategories } from 'utilities/products';
import { render } from "utilities/testUtils";

describe("navbar component", () => {
  const navItems = ['home', ...getCategories()];
  it("should display nav links", () => {
    const { getAllByRole } = render(<Navbar />);
    const navLinks  = getAllByRole('nav-link');
    navLinks.forEach((link, idx) => {
      expect(link).toHaveTextContent(navItems[idx]);
    });
  });
});