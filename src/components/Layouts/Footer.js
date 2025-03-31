import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <footer className="bg-white shadow-sm dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <Link to="/" className="hover:underline">
            CodeBook
          </Link>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a
              href="https://www.instagram.com/"
              target="blank"
              className="hover:underline me-4 md:me-6"
            >
              <span className="text-gray-500 hover:text-gray-900 dark:hover:text-white bi bi-instagram"></span>
            </a>
          </li>
          <li>
            <a
              href="https://x.com/"
              target="blank"
              className="hover:underline me-4 md:me-6"
            >
              <span className="text-gray-500 hover:text-gray-900 dark:hover:text-white bi bi-twitter"></span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/"
              target="blank"
              className="hover:underline me-4 md:me-6"
            >
              <span className="text-gray-500 hover:text-gray-900 dark:hover:text-white bi bi-github"></span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
