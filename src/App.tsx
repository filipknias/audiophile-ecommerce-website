import { Route, Routes } from "react-router-dom";
import { Navbar, Footer } from "components/app";
import { Home, Category, Product } from "pages";
import { ToastContainer } from 'react-toastify';

export default (): JSX.Element => {
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
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover={false}
        theme="light"
      />
      <Footer />
    </>
  )
}