import { Link } from "react-router-dom";
import HeroImage from "../../../assets/images/hero-image.avif";
export const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row dark:text-slate-100 items-center">
      <div className="my-5">
        <h1 className="text-5xl font-bold">The Ultimate eBook Store</h1>
        <p className="text-2xl my-7 px-1 dark:text-slate-300">
          CodeBook is the world's most popular and authoritative source for
          computer science ebooks. Find ratings and access to the newest books
          digitally.
        </p>
        <Link
          to="/products"
          className="inline-flex items-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Explore eBooks
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
      <div className="my-5 lg:max-w-xl">
        <img
          className="rounded-lg max-h-full"
          src={HeroImage}
          alt="Hero banner"
        />
      </div>
    </section>
  );
};
