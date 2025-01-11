import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductData";

const Details = () => {
  const { product } = useContext(ProductContext);
  const { id } = useParams();

  return (
    <>
      <div className="flex items-center justify-center bg-zinc-800 h-screen">
        <Link
          to={"/"}
          className=" absolute top-20 cursor-pointer left-3  px-5 py-2 bg-blue-600 text-white rounded-lg font-semibold"
        >
          Go Back
        </Link>
        <div className="w-full px-16 py-10 flex justify-center flex-wrap gap-10 overflow-x-hidden mx-auto">
          <div className="bg-white text-black flex justify-between gap-10 rounded-lg h-96 w-[40em] p-4">
            <div className="w-[40%]">
              <img
                src={product[id - 1].image}
                alt=""
                className="h-full w-full object-contain hover:scale-105"
              />
            </div>
            <div className=" w-[50%] flex flex-col gap-3 mt-2">
              <h1 className="text-3xl text-zinc-900 font-medium">
                {product[id - 1].title}
              </h1>
              <h1 className="text-sm text-zinc-500 font-medium">
                {product[id - 1].category}
              </h1>
              <h2 className="text-base text-zinc-600 line-clamp-4">
                {product[id - 1].description}
              </h2>
              <div className="flex item-center justify-between mt-10">
                <h2 className="font-semibold">
                  ${product[id - 1].price - 3}
                  <span className="text-xs ml-2 line-through opacity-55">
                    {product[id - 1].price}
                  </span>
                </h2>
                <h2 className="font-semibold px-5 py-2 rounded-full bg-zinc-400">
                  {product[id - 1].rating.rate} ⭐
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
