import { Route, Routes, useLocation } from "react-router-dom";
import { Navbar, Footer } from "components/app";
import { Home, Category, Product, Checkout } from "pages";
import { ToastContainer } from 'react-toastify';
import { useAppSelector, useAppDispatch } from "redux/hooks";
import { useEffect, useState } from "react";
import { useLocalStorage } from "hooks/useLocalStorage";
import { CartItem } from "types/CartItem";
import { LOCAL_STORAGE_PREFIX } from "data/constants"; 
import { addItem } from "redux/features/cartSlice";

export default (): JSX.Element => {
  const { activeModal } = useAppSelector((state) => state.modal);
  const { pathname } = useLocation();
  const [storedItems, setStoredItems] = useLocalStorage<CartItem[]>(`${LOCAL_STORAGE_PREFIX}-CART`);
  const dispatch = useAppDispatch();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setMounted(true);
    if (mounted) {
      if (!storedItems) return;
      storedItems.forEach((cartItem) => {
        dispatch(addItem(cartItem));
      });
    }
  }, [mounted]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:category" element={<Category />} />
        <Route path="/:category/:slug" element={<Product />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="light"
      />
      <Footer />
      {activeModal && activeModal}
    </>
  )
}