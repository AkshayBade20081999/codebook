import { Link } from "react-router-dom";

export const DropdownLoggedOut = ({ setDropdown }) => {
  return (
    <div
      id="dropdownAvatar"
      className="select-none absolute top-10 right-0 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
    >
      <ul
        className="py-1 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownUserAvatarButton"
      >
        <li>
          <Link
            onClick={() => setDropdown(false)}
            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            to="/products"
          >
            All eBooks
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setDropdown(false)}
            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            to="/login"
          >
            Login
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setDropdown(false)}
            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            to="/register"
          >
            Register
          </Link>
        </li>
      </ul>
    </div>
  );
};
