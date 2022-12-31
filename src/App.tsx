import { Route, Routes } from "react-router-dom";
import { Navbar, Footer } from "components/app";
import { Home, Category, Product } from "pages";
import { ToastContainer } from 'react-toastify';
import { useAppSelector } from "redux/hooks";

export default (): JSX.Element => {
  const { activeModal } = useAppSelector((state) => state.modal);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:category" element={<Category />} />
        <Route path="/:category/:slug" element={<Product />} />
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