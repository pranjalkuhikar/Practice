import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/ProductData";

const Home = () => {
  const { product, cart, addToCart } = useContext(ProductContext);

  return (
    <>
      <div className="flex flex-col min-h-screen bg-zinc-800">
        <div>
          {product.length > 0 ? (
            <div className="w-full px-16 py-10 mt-10 flex justify-center flex-wrap gap-10 overflow-x-hidden overflow-y-auto mx-auto">
              {product.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white text-black rounded-lg h-96 w-72 p-4"
                >
                  <Link to={`/details/${item.id}`}>
                    <div className="h-[50%]">
                      <img
                        src={item.image}
                        alt=""
                        className="h-full w-full object-contain hover:scale-105"
                      />
                    </div>
                    <div className="h-[30%] flex flex-col gap-3 mt-7">
                      <h1 className="text-base text-zinc-900 font-medium line-clamp-1">
                        {item.title}
                      </h1>
                      <h2 className="text-xs text-zinc-600 line-clamp-2">
                        {item.description}
                      </h2>
                    </div>
                  </Link>

                  <div className="flex items-center justify-between">
                    <h2 className="font-semibold">
                      ${item.price - 3}
                      <span className="text-xs ml-2 line-through opacity-55">
                        {item.price}
                      </span>
                    </h2>
                    <div
                      onClick={() => addToCart(idx)}
                      className={`${
                        cart.includes(idx)
                          ? "cursor-not-allowed pointer-events-none bg-zinc-600"
                          : "bg-yellow-400 hover:bg-yellow-500 active:scale-95 cursor-pointer"
                      } px-5 py-2 rounded-md font-semibold text-white`}
                    >
                      {cart.includes(idx) ? "Added" : "Add to Cart"}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-white">Loading...</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
