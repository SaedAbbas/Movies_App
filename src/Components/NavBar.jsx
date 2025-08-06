import React from "react";
import { useDispatch } from "react-redux";
import logo from "../images/movies.png";
import { getAllMovie, getMovieSearch } from "../redux/actions/movieAction";

const NavBar = () => {
  const dispatch = useDispatch();

  const search = (word) => {
    if (word.trim() === "") {
      dispatch(getAllMovie());
    } else {
      dispatch(getMovieSearch(word));
    }
  };

  return (
    <nav className="bg-[#0f0f0f] shadow-xl py-4 font-cairo sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo Section */}
        <a href="/" className="max-sm:hidden flex items-center space-x-3 hover:opacity-90 transition-opacity duration-300">
          <img
            src={logo}
            alt="Logo"
            className="h-14 w-auto object-contain transform hover:scale-110 transition-transform duration-300"
          />
          <span className="font-bold capitalize text-xl text-white">Most popular Movies in the world</span>
        </a>

        {/* Search Section */}
        <div className="w-full sm:w-auto flex-1 sm:flex-none">
          <div className="relative">
            <input
              type="text"
              onChange={(e) => search(e.target.value)}
              placeholder="ابحث عن فيلم..."
              className="w-full sm:w-[300px] md:w-[400px] lg:w-[500px] bg-gray-800 text-white placeholder-gray-400 border border-gray-700 rounded-full py-2 pr-12 pl-4 text-base focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
            />
            <svg
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-yellow-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
