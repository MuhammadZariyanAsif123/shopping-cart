import { React, useEffect, useState } from "react";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch The Categories Data From API
    const fetchData = async () => {
      const data = await fetch(
        "https://fakestoreapi.com/products/categories"
      ).then((res) => res.json());
      setCategories([...data]);
    };
    fetchData();
  }, []);

  return (
    <div className=" bg-red-800 sm:h-20  flex flex-col items-center justify-center mt-2  cursor-pointer  uppercase font-semibold gap-6  md:flex md:flex-row ">
      {categories.length > 0 &&
        categories.map((item, index) => {
          return (
            <span
              key={index}
              className=" text-white hover:text-blue-500 hover:border-b-2 hover:border-b-yellow-600"
            >
              {item}
            </span>
          );
        })}
    </div>
  );
};

export default Categories;
