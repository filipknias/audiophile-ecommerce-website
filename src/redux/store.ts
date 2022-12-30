import { configureStore, combineReducers } from '@reduxjs/toolkit';
import type { PreloadedState } from '@reduxjs/toolkit'
import cartReducer from './features/cartSlice';

const rootReducer = combineReducers({
  cart: cartReducer
})

export const store = configureStore({
  reducer: {
    cart: cartReducer,
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