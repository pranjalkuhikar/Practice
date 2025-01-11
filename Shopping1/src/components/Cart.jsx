import { useContext, useEffect } from "react";
import { ProductContext } from "../context/ProductData";

const Cart = () => {
  const { product, cart, setCount, setCart } = useContext(ProductContext);
  const handleUpdateCart = (newCart) => {
    setCart(newCart);
  };
  useEffect(() => {
    handleUpdateCart(cart);
  }, [cart]);
  const HandlerDelete = (id) => {
    const newCart = cart.filter((_, idx) => idx != id);
    setCount((prev) => prev - 1);
    handleUpdateCart(newCart);
  };

  return (
    <>
      <div className="h-screen w-full bg-zinc-800">
        <div className="w-full px-16 py-10 flex flex-col items-center justify-center flex-wrap gap-10 overflow-x-hidden mx-auto">
          {cart.length > 0 ? (
            cart.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 text-black flex justify-between gap-10 rounded-lg h-40 w-[40em] p-4"
              >
                <div className="w-[40%]">
                  <img
                    src={product[item].image}
                    alt="img"
                    className="h-full w-full object-contain hover:scale-105"
                  />
                </div>
                <div className=" w-[50%] flex flex-col gap-3 mt-2 text-black">
                  <h1 className="text-3xl text-zinc-900 font-medium line-clamp-1">
                    {product[item].title}
                  </h1>
                  <h1 className="text-sm text-zinc-500 font-medium">
                    {product[item].category}
                  </h1>
                  <div className="flex items-center justify-between">
                    <h2 className="font-semibold">
                      ${product[item].price}
                      <span className="text-xs ml-2 line-through opacity-55">
                        ${product[item].price}
                      </span>
                    </h2>
                    <div
                      onClick={() => HandlerDelete(idx)}
                      className="px-5 py-2 bg-red-400 rounded-md font-semibold text-white cursor-pointer active:scale-95 hover:bg-red-500"
                    >
                      Remove
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-white">No Item Added</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
