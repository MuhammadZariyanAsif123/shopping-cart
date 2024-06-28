import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch Products From API
    const fetchProducts = async () => {
      const data = await fetch("https://fakestoreapi.com/products").then(
        (res) => res.json()
      );

      console.log("Before:", data);

      const updatedArray = [data].flat();

      setProducts([updatedArray].flat(2));

      console.log("After:", products);
    };
    fetchProducts();
  }, []);

  return (
    <>
      {products.length > 0 && (
        <div className=" sm:grid sm:grid-cols-3 gap-5 flex flex-col items-center  ">
          {products.map((item, index) => (
            <div class="h-screen w-full flex items-center justify-center  dark:bg-gray-800">
              <article class="max-w-sm w-full shadow-inner shadow-purple-800 bg-white rounded-lg  overflow-hidden dark:bg-gray-700">
                <div>
                  <img
                    class=" object-cover hover:scale-75 translate-x-2 hover:rotate-3 duration-200  h-72 mx-auto w-auto"
                    src={item.image}
                    alt="Converse sneakers"
                  />
                </div>
                <div class="flex flex-col text-center font-bold gap-1 mt-4 px-4">
                  <h2 class=" uppercase   text-gray-800 dark:text-gray-50">
                    {item.title}
                  </h2>
                  <span class=" text-gray-800 dark:text-gray-50">
                    {item.price}$
                  </span>
                </div>

                <div class="mt-4 p-4 border-t border-gray-200 dark:border-gray-500">
                  <button class="w-full flex justify-between items-center font-bold cursor-pointer hover:underline text-gray-800 dark:text-gray-50">
                    <span class="text-base">Add to Cart</span>
                    <svg
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </button>
                </div>
              </article>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Products;
