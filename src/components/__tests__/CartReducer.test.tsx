import { getProductById } from "utilities/products";
import reducer, { addItem } from "redux/features/cartSlice";

describe("cart reducer", () => {
  it("should add item to cart", () => {
    const product = getProductById(1);

    const prevState = {
      cart: [],
      total: 0,
    };

    const cartItem = {
      id: product.id,
      slug: product.slug,
      quantity: 1,
      image: product.cartImage,
      name: product.name,
      price: product.price,
    }

    expect(reducer(prevState, addItem(cartItem))).toEqual({
      cart: [cartItem],
      total: product.price * cartItem.quantity,
    });
  });
});