import { Route, Routes } from "react-router-dom";
import { Navbar } from "components/app/Navbar/Navbar";
import { Home } from "pages/Home";

export default (): JSX.Element => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}