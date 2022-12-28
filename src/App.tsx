import { Route, Routes } from "react-router-dom";
import { Navbar, Footer } from "components/app";
import { Home } from "pages";

export default (): JSX.Element => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}