import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const param = useParams();

  const getMovieDetails = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${param.id}?api_key=164da79d375606ec7cbb1dcc4ae04ae9&language=ar-US`
      );
      setMovie(res.data);
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return (
    <div className="min-h-screen text-white font-cairo">
      <div className="container mx-auto px-4 py-10 max-w-6xl">
        {/* Movie Main Card */}
        <div className="flex flex-col lg:flex-row items-center gap-8 mb-10 bg-gray-900 rounded-2xl shadow-2xl p-6 transition-transform duration-300 hover:scale-[1.01]">
          <img
            className="w-full lg:w-1/3 rounded-xl shadow-lg object-cover"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path || "/placeholder.jpg"}`}
            alt={movie.title || "Movie poster"}
          />
          <div className="w-full lg:w-2/3 text-right space-y-4">
            <h1 className="text-3xl lg:text-4xl font-bold text-yellow-400 border-b border-yellow-500 pb-2">
              {movie.title || "غير متوفر"}
            </h1>
            <p className="text-lg lg:text-xl text-gray-300">
              <span className="font-semibold text-yellow-400">تاريخ الإصدار:</span> {movie.release_date || "غير متوفر"}
            </p>
            <p className="text-lg lg:text-xl text-gray-300">
              <span className="font-semibold text-yellow-400">عدد المقيمين:</span> {movie.vote_count || 0}
            </p>
            <p className="text-lg lg:text-xl text-gray-300">
              <span className="font-semibold text-yellow-400">التقييم:</span>{" "}
              {movie.vote_average?.toFixed(1) || "غير متوفر"} / 10 ⭐
            </p>
          </div>
        </div>

        {/* Story Section */}
        <div className="bg-gray-900 rounded-2xl shadow-2xl p-8 mb-10">
          <h2 className="text-2xl lg:text-3xl font-bold text-yellow-400 border-b border-yellow-500 pb-3 mb-4 text-right">
            القصة
          </h2>
          <p className="text-lg text-gray-200 leading-relaxed text-right">
            {movie.overview || "لا توجد قصة متاحة 😞"}
          </p>
        </div>

        {/* Buttons Section */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/">
            <button className="w-full sm:w-48 bg-yellow-400 text-gray-900 px-6 py-3 rounded font-semibold hover:bg-yellow-500 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              عودة للرئيسية
            </button>
          </Link>
          <a
            href={movie.homepage || "#"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="w-full sm:w-48 bg-yellow-400 text-gray-900 px-6 py-3 rounded font-semibold hover:bg-yellow-500 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              مشاهدة الفيلم
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
