import React from "react";
import { Link } from "react-router-dom";

const CardMovie = ({ mov }) => {
  return (
    <Link
      to={`/movie/${mov.id}`}
      className="block group relative w-full max-w-[250px] mx-auto mb-6"
    >
      <div className="relative overflow-hidden rounded-xl shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:scale-105">
        <img
          src={`https://image.tmdb.org/t/p/w500/${mov.poster_path}`}
          className="w-full h-[350px] object-cover"
          alt={mov.original_title}
        />

        {/* اسم الفيلم يظهر من تحت وقت الهوفر فقط */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white px-4 py-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <h5 className="text-base font-bold text-center">{mov.original_title}</h5>
        </div>

        {/* شريط معلومات فوق البوستر */}
        <div className="absolute top-2 right-2 bg-black/70 text-white text-xs font-semibold px-2 py-1 rounded-full">
          {mov.vote_average.toFixed(1)}
        </div>
      </div>
    </Link>
  );
};

export default CardMovie;
