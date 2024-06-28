import React from "react";

const Header = () => {
  return (
    <>
      <div className="flex flex-row justify-center gap-40">
        <nav>
          <ul className="uppercase flex flex-row gap-10 ">
            <li>Home</li>
            <li>Products</li>
          </ul>
        </nav>

        <div>
          <img src="./CartIcon.png" className="h-[40px]" alt="cart" />
        </div>
      </div>
    </>
  );
};

export default Header;
