import cn from "classnames";
import { useEffect, useState } from "react";
export default function LoadMore() {
  const [count, setCount] = useState(1);
  const [data, setData] = useState([]);
  const [skip, setSkip] = useState(0);
  const [pagination, setPagination] = useState(0);
  async function getDataProduct() {
    const res = await fetch(
      `https://dummyjson.com/products?limit=10&skip=${skip}`,
    );
    const data = await res.json();
    setPagination(Math.floor(data.total / data.limit));
    if (data && data.products && data.products.length) {
      setData(data.products);
    }
  }
  useEffect(() => {
    getDataProduct();
  }, [count]);
  function handleLoadMore() {
    setCount(count + 1);
    setSkip(count * 10);
    if (skip == 90) {
      setSkip(0);
      setCount(1);
    }
  }
  function handlePagination(index) {
    setCount(index);
    setSkip((index - 1) * 10);
  }
  return (
    <main className="mt-8 font-openSans md:mx-auto md:max-w-3xl xl:max-w-6xl">
      {/* cards */}
      <div className="flex flex-col flex-wrap gap-8 sm:flex-row">
        {data.map((product) => {
          return (
            <div
              className="mx-auto w-full max-w-xs rounded-md border border-black px-6 py-4"
              key={product.id}
            >
              <div className="space-y-3 text-center">
                <img
                  src={product.thumbnail}
                  alt={product.description}
                  className="mx-auto h-48 w-48 bg-cover bg-center"
                />
                <h3 className="text-xl font-bold">{product.title}</h3>
              </div>
              <div className="mt-5 flex justify-between">
                <p className="text-2xl text-blueDark">${product.price}</p>
                <p className="">Rating : {product.rating}</p>
              </div>
            </div>
          );
        })}
      </div>
      {/* load more btn */}
      <div className="my-10 flex">
        <button
          className="mx-auto inline-block w-full max-w-xs rounded-lg bg-blueDark px-8 py-3 text-center text-white"
          type="button"
          onClick={() => handleLoadMore()}
        >
          Load More
        </button>
      </div>
      {/* pagination */}
      <div className="mx-auto my-10 flex max-w-fit justify-center border border-black">
        {[...Array(pagination)].map((_, index) => {
          index += 1;
          return (
            <div className="border" key={index}>
              <button
                type="button"
                className={cn("rounded-md px-4 py-2", {
                  "bg-black text-white": count === index,
                })}
                onClick={() => handlePagination(index)}
              >
                {index}
              </button>
            </div>
          );
        })}
      </div>
    </main>
  );
}
