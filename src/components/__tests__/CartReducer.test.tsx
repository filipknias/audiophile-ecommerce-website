import { getProductById } from "utilities/products";
import reducer, { addItem, removeItem, increaseItemQuantity, decreaseItemQuantity } from "redux/features/cartSlice";

describe("cart reducer", () => {
  const product = getProductById(1);
  const mockCartItem = {
    id: product.id,
    slug: product.slug,
    quantity: 1,
    image: product.cartImage,
    name: product.name,
    price: product.price,
  };

  it("should add item to cart", () => {
    const product = getProductById(1);

    const prevState = {
      cart: [],
      total: 0,
    };

    expect(reducer(prevState, addItem(mockCartItem))).toEqual({
      cart: [mockCartItem],
      total: product.price * mockCartItem.quantity,
    });
  });

  it("should remove item to cart", () => {
    const prevState = {
      cart: [mockCartItem],
      total: mockCartItem.price * mockCartItem.quantity,
    };

    expect(reducer(prevState, removeItem(mockCartItem.id))).toEqual({
      cart: [],
      total: 0,
    });
  });

  it("should increase item quantity", () => {
    const prevState = {
      cart: [mockCartItem],
      total: mockCartItem.price * mockCartItem.quantity,
    };

    const newQuantity = mockCartItem.quantity + 1;

    expect(reducer(prevState, increaseItemQuantity(mockCartItem.id))).toEqual({
      cart: [{ ...mockCartItem, quantity: mockCartItem.quantity + 1 }],
      total: mockCartItem.price * newQuantity,
    });
  });

  it("should decrease item quantity", () => {
    const prevState = {
      cart: [mockCartItem],
      total: mockCartItem.price * mockCartItem.quantity,
    };

    const newQuantity = mockCartItem.quantity - 1;

    expect(reducer(prevState, decreaseItemQuantity(mockCartItem.id))).toEqual({
      cart: [{ ...mockCartItem, quantity: mockCartItem.quantity - 1 }],
      total: mockCartItem.price * newQuantity,
    });
  });
});