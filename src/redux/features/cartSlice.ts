import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { CartItem } from 'types/CartItem';

export interface CartState {
  cart: CartItem[];
  total: number;
}

const initialState: CartState = {
  cart: [],
  total: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, { payload }: PayloadAction<CartItem>) => {
      if (state.cart.find((item) => item.id === payload.id)) {
        state.cart = state.cart.map((item) => {
          if (item.id === payload.id) {
            return {
              ...item,
              quantity: item.quantity + payload.quantity,
            }
          }
          return item;
        })
      } else {
        state.cart = [...state.cart, payload];
      }
      state.total += payload.price * payload.quantity;
    },
    removeItem: (state, { payload }: PayloadAction<number>) => {
      const cartItem = state.cart.find((item) => item.id === payload);
      if (!cartItem) return;
      state.cart = state.cart.filter((item) => item.id !== cartItem.id);
      state.total -= cartItem.price * cartItem.quantity;;
    },
    increaseItemQuantity: (state, { payload }: PayloadAction<number>) => {
      const cartItem = state.cart.find((item) => item.id === payload);
      if (!cartItem) return;
      state.cart = state.cart.map((item) => {
        if (item.id === payload) {
          return {
            ...item,
            quantity: item.quantity + 1,
          }
        }
        return item;
      });
      state.total += cartItem.price;
    },
    decreaseItemQuantity: (state, { payload }: PayloadAction<number>) => {
      const cartItem = state.cart.find((item) => item.id === payload);
      if (!cartItem) return;
      state.cart = state.cart.map((item) => {
        if (item.id === payload) {
          return {
            ...item,
            quantity: item.quantity - 1,
          }
        }
        return item;
      });
      state.total -= cartItem.price;
    },
    clearCart: (state) => {
      state.cart = [];
      state.total = 0;
    },
  },
})

export const { addItem, removeItem, increaseItemQuantity, decreaseItemQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;