const MovieRow = ({ title, movies }) => {
  return (
    <div className="mb-8">
      <h2 className="text-4xl font-bold mb-4">
        {title}
      </h2>

      <div className="flex gap-4 overflow-x-scroll overflow-y-visible py-8 scrollbar-none">
        {movies?.map((movie) => (
          <img
            key={movie.imdbID}
            src={movie.Poster}
            alt={movie.Title}
            className="w-[180px] h-[250px] object-cover rounded-lg hover:scale-125 hover:z-50 transition-all duration-300 cursor-pointer"          />
        ))}
      </div>
    </div>
  );
};

export default MovieRow;


