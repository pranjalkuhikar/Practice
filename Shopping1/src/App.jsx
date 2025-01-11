import { Route, Routes } from "react-router-dom";
import Details from "./components/Details";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default App;
