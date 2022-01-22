import React, { useEffect, useState } from 'react'
import requests from './requests'
import axios from './axios'

const GetGenre = () => {
  const [genreMovie, setGenreMovie] = useState([]);
  const [genreTV, setGenreTV] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchGenreMovie);
      setGenreMovie(request.data)
      return request.data;
    }
    fetchData();
  },[])

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchGenreTV);
      setGenreTV(request.data)
      return request.data;
    }
    fetchData();
  },[])

  return [genreMovie.genres, genreTV.genres];
}

export default GetGenre;