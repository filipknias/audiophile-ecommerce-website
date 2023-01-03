import { Route, Routes, useLocation } from "react-router-dom";
import { Navbar, Footer } from "components/app";
import { Home, Category, Product, Checkout } from "pages";
import { ToastContainer } from 'react-toastify';
import { useAppSelector } from "redux/hooks";
import { useEffect } from "react";

export default (): JSX.Element => {
  const { activeModal } = useAppSelector((state) => state.modal);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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