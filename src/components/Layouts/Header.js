import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { useState, useEffect } from "react";
import { Search } from "../Sections/Search";
import { DropdownLoggedIn, DropdownLoggedOut } from "..";
import { useCart } from "../../context";

export const Header = () => {
  const { cartList } = useCart();
  const [searchSec, setSearchSec] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const token = JSON.parse(sessionStorage.getItem("token"));
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <header>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={Logo} className="h-10 rounded-full" alt="CodeBook Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              CodeBook
            </span>
          </Link>
          <div className="flex items-center space-x-5 rtl:space-x-reverse relative">
            <span
              onClick={() => {
                setDarkMode(!darkMode);
              }}
              className="cursor-pointer text-xl text-gray-700 dark:text-white bi bi-gear-wide-connected"
            ></span>
            <span
              onClick={() => setSearchSec(!searchSec)}
              className="cursor-pointer text-xl text-gray-700 dark:text-white bi bi-search"
            ></span>
            <Link to="/cart">
              <span className="cursor-pointer text-xl text-gray-700 dark:text-white relative bi bi-cart-fill">
                <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full ">
                  {cartList.length}
                </span>
              </span>
            </Link>
            <span
              onClick={() => setDropdown(!dropdown)}
              className="cursor-pointer text-xl text-gray-700 dark:text-white bi bi-person-circle"
            ></span>
            {dropdown &&
              (token ? (
                <DropdownLoggedIn setDropdown={setDropdown} />
              ) : (
                <DropdownLoggedOut setDropdown={setDropdown} />
              ))}
          </div>
        </div>
      </nav>
      {searchSec && <Search setSearchSec={setSearchSec} />}
    </header>
  );
};
