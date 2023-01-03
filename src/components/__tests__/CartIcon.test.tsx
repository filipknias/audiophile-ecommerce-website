import { CartIcon } from "components/app";
import { render } from "utilities/testUtils";
import { getProductById } from "utilities/products";

describe("cart icon component", () => {
  it("should display cart items amount", () => {
    const product = getProductById(1);
    const mockCartItem = {
      id: product.id,
      slug: product.slug,
      quantity: 1,
      image: product.cartImage,
      name: product.name,
      price: product.price,
    };
    const initialState = {
      cart: { cart: [mockCartItem], total: mockCartItem.price * mockCartItem.quantity },
      modal: { activeModal: null, }
    }

    const { getByRole } = render(<CartIcon />, {
      preloadedState: initialState,
    });
    const amountDisplayElement  = getByRole('amount-display');
    
    expect(amountDisplayElement).toHaveTextContent(initialState.cart.cart.length.toString());
  });
});