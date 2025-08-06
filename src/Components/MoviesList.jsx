import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardMovie from "./CardMovie";
import PaginationComponent from "./Pagination";
import { getAllMovie } from "../redux/actions/movieAction";


const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const dispatch = useDispatch();
  const dataMovies = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getAllMovie());
  }, [dispatch]);

  useEffect(() => {
    setMovies(dataMovies);
  }, [dataMovies]);

  return (
    <div className="containerXL mx-auto mt-6 ">
      {movies.length >= 1 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {movies.map((mov) => (
            <CardMovie key={mov.id} mov={mov} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center h-64">
          <h2 className="text-2xl text-gray-500 font-semibold">
            لا يوجد أفلام...
          </h2>
        </div>
      )}
      {movies.length >= 1 && (
        <div className="my-8 flex justify-center">
          <PaginationComponent />
        </div>
      )}
    </div>
  );
};

export default MoviesList;