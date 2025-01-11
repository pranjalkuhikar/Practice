/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useRef, useState } from "react";
import { ProductContext } from "../context/ProductData";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { product, count } = useContext(ProductContext);
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  const [visible, setVisible] = useState(false);
  const searchRef = useRef();

  const handlerChange = (event) => {
    setSearch(event.target.value);
    setVisible(true);
  };

  const handlerFocus = () => {
    setVisible(true);
  };

  const searchProduct = () => {
    const SearchFilter = product.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    setResult(SearchFilter);
  };

  useEffect(() => {
    const debounce = setTimeout(searchProduct, 500);
    return () => clearTimeout(debounce);
  }, [search]);

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setVisible(false);
      }
    });
  }, []);
  return (
    <div className="flex items-center justify-between gap-2 flex-wrap w-full bg-zinc-800 text-white px-6 h-20">
      <Link to={"/"} className="font-[Forte] text-3xl">
        PranjalShop
      </Link>
      <div className="">
        <input
          type="text"
          ref={searchRef}
          value={search}
          onChange={handlerChange}
          onFocus={handlerFocus}
          placeholder="Enter the Search Product"
          className="bg-transparent px-14 py-2 relative rounded-md border text-white"
        />

        {visible && result.length > 0 && search.length > 0 && (
          <div className="absolute top-20 mt-2 w-96 max-h-60 overflow-y-auto bg-white text-black rounded-md shadow-lg z-50">
            {result.map((item, idx) => (
              <Link
                to={`/details/${item.id}`}
                className="px-4 py-2 border-b last:border-b-0 cursor-pointer "
                key={idx}
              >
                <h1 className="font-medium hover:bg-gray-300 py-3 px-5">
                  {item.title}
                </h1>
              </Link>
            ))}
          </div>
        )}
      </div>
      <Link
        to={"/cart"}
        className="text-xl bg-yellow-500 px-5 py-2 rounded-lg font-semibold flex items-center gap-5"
      >
        Cart
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-shopping-cart"
          >
            <circle cx="8" cy="21" r="1" />
            <circle cx="19" cy="21" r="1" />
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
          </svg>
        </span>
        {count}
      </Link>
    </div>
  );
};

export default Navbar;
