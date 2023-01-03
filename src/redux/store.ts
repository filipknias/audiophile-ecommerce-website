import { configureStore, combineReducers } from '@reduxjs/toolkit';
import type { PreloadedState } from '@reduxjs/toolkit'
import cartReducer from './features/cartSlice';
import modalReducer from './features/modalSlice';

const rootReducer = combineReducers({
  cart: cartReducer,
  modal: modalReducer,
})

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  },
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;