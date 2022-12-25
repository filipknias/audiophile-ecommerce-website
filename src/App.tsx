import { Route, Routes } from "react-router-dom";
import { Navbar } from "components/app/Navbar/Navbar";

export default (): JSX.Element => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={null} />
      </Routes>
    </>
  )
}