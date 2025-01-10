import { useContext, useState, useRef, useEffect } from "react";
import { ProductContext } from "./context/productData";

const App = () => {
  const { product } = useContext(ProductContext);
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const searchRef = useRef(null);

  const handleSearch = () => {
    const searchProducts = product.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    setResult(searchProducts);
  };

  useEffect(() => {
    const debounce = setTimeout(handleSearch, 500);
    return () => clearTimeout(debounce);
  }, [search]);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setIsDropdownVisible(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
  }, []);

  return (
    <div className="min-h-screen page bg-zinc-800 text-white font-[Arial]">
      {/* Search Bar */}
      <div className="relative h-full w-full flex items-center flex-col justify-center pt-10">
        <div ref={searchRef} className="relative w-96">
          <input
            type="text"
            className="bg-zinc-900 w-full border border-gray-600 rounded-md py-3 px-5 text-white focus:outline-none focus:ring focus:ring-yellow-400"
            placeholder="Search Product"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setIsDropdownVisible(true);
            }}
          />
          {/* Search Results */}
          {isDropdownVisible && result.length > 0 && search.length > 0 && (
            <div className="absolute top-full mt-2 w-full max-h-60 overflow-y-auto bg-white text-black rounded-md shadow-lg z-50">
              {result.map((item, idx) => (
                <div
                  key={idx}
                  className="px-4 py-2 border-b last:border-b-0 cursor-pointer hover:bg-gray-100"
                >
                  <h1 className="font-medium">{item.title}</h1>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Product Grid */}
      {product.length > 0 ? (
        <div className="w-full px-16 py-10 flex justify-center flex-wrap gap-10 overflow-x-hidden overflow-y-auto mx-auto">
          {product.map((item, idx) => (
            <div
              key={idx}
              className="bg-white text-black rounded-lg h-96 w-72 p-4 shadow-lg"
            >
              <div className="h-[65%]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-contain hover:scale-105 transition-transform"
                />
              </div>
              <div className="h-[35%] flex flex-col gap-3 mt-2">
                <h1 className="text-base text-zinc-900 font-medium line-clamp-1">
                  {item.title}
                </h1>
                <h2 className="text-xs text-zinc-600 line-clamp-2">
                  {item.description}
                </h2>
                <div className="flex items-center justify-between">
                  <h2 className="font-semibold">
                    ${item.price - 3}
                    <span className="text-xs ml-2 line-through opacity-55">
                      {item.price}
                    </span>
                  </h2>
                  <div className="px-5 py-2 bg-yellow-400 rounded-md font-semibold text-white cursor-pointer active:scale-95 hover:bg-yellow-500">
                    Add To Cart
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-white z-50 mt-10 flex items-center justify-center absolute top-40 left-40">
          Loading....
        </div>
      )}
    </div>
  );
};

export default App;
