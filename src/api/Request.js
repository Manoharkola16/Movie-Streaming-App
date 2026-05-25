const API_KEY = "YOUR_API_KEY";

const requests = {
  trending: `/trending/movie/week?api_key=${API_KEY}`,
  netflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  topRated: `/movie/top_rated?api_key=${API_KEY}`,
  actionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  comedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  horrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  romanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  documentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,

   teluguMovies: `/discover/movie?api_key=${API_KEY}&with_original_language=te`,

  malayalamMovies:  `/discover/movie?api_key=${API_KEY}&with_original_language=ml`,

  tamilMovies:  `/discover/movie?api_key=${API_KEY}&with_original_language=ta`,

  kannadaMovies:  `/discover/movie?api_key=${API_KEY}&with_original_language=kn`,
};

export default requests;