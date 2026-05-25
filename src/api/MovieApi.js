import axios from "axios";

const API_KEY = "270d2ace";
const BASE_URL = "https://www.omdbapi.com/";

export const fetchTrendingMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}?apikey=${API_KEY}&s=avengers`
  );

  return response.data.Search || [];
};

export const fetchActionMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}?apikey=${API_KEY}&s=batman`
  );

  return response.data.Search || [] ;
};

export const fetchComedyMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}?apikey=${API_KEY}&s=comedy`
  );

  return response.data.Search || [];
};

export const fetchAnimeMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}?apikey=${API_KEY}&s=anime`
  );

 return response.data.Search || [];
};

export const fetchSportsMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}?apikey=${API_KEY}&s=sports`
  );

 return response.data.Search || [];
};

  export const fetchTopRatedMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}?apikey=${API_KEY}&s=top`
  );

  return response.data.Search || [];
};

export const fetchSciFiMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}?apikey=${API_KEY}&s=interstellar`
  );

  return response.data.Search || [];
};

export const fetchAdventureMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}?apikey=${API_KEY}&s=adventure`
  );

  return response.data.Search || [];
};

export const fetchMarvelMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}?apikey=${API_KEY}&s=marvel`
  );

  return response.data.Search || [];
};

export const fetchDCMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}?apikey=${API_KEY}&s=superman`
  );

  return response.data.Search || [];
};

export const fetchThrillerMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}?apikey=${API_KEY}&s=thriller`
  );

  return response.data.Search || [];
};

export const fetchTeluguMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}?apikey=${API_KEY}&s=telugu`
  );

  return response.data.Search || [];
};

export const fetchMalayalamMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}?apikey=${API_KEY}&s=malayalam`
  );

  return response.data.Search || [];
};

export const fetchTamilMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}?apikey=${API_KEY}&s=tamil`
  );

  return response.data.Search || [];
};

export const fetchKannadaMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}?apikey=${API_KEY}&s=kannada`
  );

  return response.data.Search || [];
};