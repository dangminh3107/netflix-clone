import React, { useState, useEffect } from 'react'
import './MovieModal.css'
import axios from '../../axios'
import { API_KEY } from '../../requests'
import GetGenre from '../../getGenre'
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StarIcon from '@mui/icons-material/Star';

const baseUrl = "https://image.tmdb.org/t/p/original"; 

function MovieModal( { movieCurrent, statActive, movieGen, onChange } ) {
  const fetchSameGenreMovie = `/discover/movie?api_key=${API_KEY}&with_genres=${movieGen.length ? movieGen[0].genres[0].id : ''}&page=1&language=en-US`
  const fetchSameGenreTV = `/discover/tv?api_key=${API_KEY}&with_genres=${movieGen.length ? movieGen[0].genres[0].id : ''}&page=1&language=en-US`
  const [movieWithSamGenre, setMovieWithSameGenre] = useState([])

  useEffect(() => {
    async function fetchData() {
      let request = await axios.get(fetchSameGenreMovie);
      if (!request.data.results.length) {
        request = await axios.get(fetchSameGenreTV);
      }
      setMovieWithSameGenre(request.data.results)
      return request
    }
    fetchData()
  },[movieCurrent])

  return (
    <div className={`movie-modal-wrapper ${statActive ? 'active' : ''}`}>
      <div className="movie-modal">
        <div className="modal-background">
          <button className="modal-close" onClick={onChange}>
            <ClearOutlinedIcon className="modal-icon"/>
          </button>
          <img src={`${baseUrl}${movieCurrent.backdrop_path}`} alt="" className="movie-modal-background"/>
          <div className="modal-content-background">
            <h1>{movieCurrent.name || movieCurrent.title}</h1>
            <div className="modal-buttons">
              <button className="modal-btn-play">
                <PlayArrowIcon className="modal-icon"/>
                Play
              </button>
              <AddIcon className="modal-icon"/>
              <ThumbUpOutlinedIcon className="modal-icon"/>
              <ThumbDownOutlinedIcon className="modal-icon"/>
            </div>
          </div>
          <div className="modal-background--fadeBottom"></div>
        </div>
        <div className="movie-modal-info">
          <div className="movie-modal-info-left">
            <p>{movieCurrent.overview}</p>
          </div>
          <div className="movie-modal-info-right">
            <div className="movie-modal-genres">
              <h4>Genres</h4>
              {movieGen.length ? movieGen[0].genres.map((gen, index) => (
                <span key={index}>{gen.name}</span>
              )) : ''}
            </div>
          </div>
        </div>
        <div className="more-movies">
        {movieWithSamGenre?.map((movie, index) => (
          <div className="movie-wrapper" key={index}>
            <img src={`${baseUrl}${movie.backdrop_path}`} alt="" className="movie-img" />
            <div className="movie-description">
              <div className="movie-info">
                <div className="movie-rating">
                    <StarIcon className="star-icon"/>
                    <span>{movie.vote_average}</span>
                </div>
                <AddIcon className='add-icon'/>
              </div>
              <div className="movie-overview">
                <p>{movie.overview}</p>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default MovieModal
