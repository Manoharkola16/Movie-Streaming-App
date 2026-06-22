import axios from "axios";

const API_KEY = "270d2ace";
const BASE_URL = "https://www.omdbapi.com/";

export const fetchTrendingMovies = async (page = 1) => {
  const response = await axios.get(
    `${BASE_URL}?apikey=${API_KEY}&s=avengers&page=${page}`
  );

  return {
    movies: response.data.Search || [],
    totalResults: Number(response.data.totalResults) || 0,
  };
};

export const fetchActionMovies = async (page = 1) => {
  const response = await axios.get(
    `${BASE_URL}?apikey=${API_KEY}&s=batman&page=${page}`
  );

  return {
    movies: response.data.Search || [],
    totalResults: Number(response.data.totalResults) || 0,
  };
};

export const fetchComedyMovies = async (page = 1) => {
  const response = await axios.get(
    `${BASE_URL}?apikey=${API_KEY}&s=comedy&page=${page}`
  );

  return {
    movies: response.data.Search || [],
    totalResults: Number(response.data.totalResults) || 0,
  };
};

export const fetchAnimeMovies = async (page = 1) => {
  const response = await axios.get(
    `${BASE_URL}?apikey=${API_KEY}&s=anime&page=${page}`
  );

 return {
    movies: response.data.Search || [],
    totalResults: Number(response.data.totalResults) || 0,
  };
};

export const fetchSportsMovies = async (page = 1) => {
  const response = await axios.get(
    `${BASE_URL}?apikey=${API_KEY}&s=sports&page=${page}`
  );

 return {
    movies: response.data.Search || [],
    totalResults: Number(response.data.totalResults) || 0,
  };
};

  export const fetchTopRatedMovies = async (page = 1) => {
  const response = await axios.get(
    `${BASE_URL}?apikey=${API_KEY}&s=top&page=${page}`
  );

  return {
    movies: response.data.Search || [],
    totalResults: Number(response.data.totalResults) || 0,
  };
};

export const fetchSciFiMovies = async (page = 1) => {
  const response = await axios.get(
    `${BASE_URL}?apikey=${API_KEY}&s=interstellar&page=${page}`
  );

  return {
    movies: response.data.Search || [],
    totalResults: Number(response.data.totalResults) || 0,
  };
};

export const fetchAdventureMovies = async (page = 1) => {
  const response = await axios.get(
    `${BASE_URL}?apikey=${API_KEY}&s=adventure&page=${page}`
  );

  return {
    movies: response.data.Search || [],
    totalResults: Number(response.data.totalResults) || 0,
  };
};

export const fetchMarvelMovies = async (page = 1) => {
  const response = await axios.get(
    `${BASE_URL}?apikey=${API_KEY}&s=marvel&page=${page}`
  );

  return {
    movies: response.data.Search || [],
    totalResults: Number(response.data.totalResults) || 0,
  };
};

export const fetchDCMovies = async (page = 1) => {
  const response = await axios.get(
    `${BASE_URL}?apikey=${API_KEY}&s=superman&page=${page}`
  );

  return {
    movies: response.data.Search || [],
    totalResults: Number(response.data.totalResults) || 0,
  };
};

export const fetchThrillerMovies = async (page = 1) => {
  const response = await axios.get(
    `${BASE_URL}?apikey=${API_KEY}&s=thriller&page=${page} `
  );

  return {
    movies: response.data.Search || [],
    totalResults: Number(response.data.totalResults) || 0,
  };
};

export const fetchTeluguMovies = async (page = 1) => {
  const response = await axios.get(
    `${BASE_URL}?apikey=${API_KEY}&s=telugu&page=${page}`
  );

  return {
    movies: response.data.Search || [],
    totalResults: Number(response.data.totalResults) || 0,
  };
};

export const fetchMalayalamMovies = async (page = 1) => {
  const response = await axios.get(
    `${BASE_URL}?apikey=${API_KEY}&s=malayalam&page=${page}`
  );

  return {
    movies: response.data.Search || [],
    totalResults: Number(response.data.totalResults) || 0,
  };
};

export const fetchTamilMovies = async (page = 1) => {
  const response = await axios.get(
    `${BASE_URL}?apikey=${API_KEY}&s=tamil&page=${page}`
  );

  return {
    movies: response.data.Search || [],
    totalResults: Number(response.data.totalResults) || 0,
  };
};

export const fetchKannadaMovies = async (page = 1) => {
  const response = await axios.get(
    `${BASE_URL}?apikey=${API_KEY}&s=kannada&page=${page}`
  );

  return {
    movies: response.data.Search || [],
    totalResults: Number(response.data.totalResults) || 0,
  };
};