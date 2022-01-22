import React, { useState, useCallback, useEffect } from 'react'
import './HomeScreen.css'
import Navbar from '../Navbar'
import Banner from '../Banner'
import Row from '../Row'
import requests from '../../requests'
import MovieModal from '../MovieModal'
import GetGenre from '../../getGenre'
import Footer from '../Footer'

function HomeScreen() {
  const [movieCurrent, setMovieCurrent] = useState('')
  const [modalActive, setModalActive] = useState(false);
  const [movieGen, setMovieGen] = useState([])
  const [genre, setGenre] = useState([])
  
  const temp = GetGenre();
  useEffect(() => {
    if (temp[0] && temp[1]) {
      setGenre([...temp[0], ...temp[1]])
    }
  }, [temp[1]])

  const handleChange = (movie, listGenres) => {
    const bodyContent = document.querySelector('body')
    bodyContent.style.overflow = 'hidden'
    setMovieGen(listGenres)
    setModalActive(true);
    setMovieCurrent(movie);
  }
  
  useEffect(() => {
    
    const modalWrapper = document.querySelector('.movie-modal-wrapper')
    const handleModalWrapperCLick = (e) => {
      if (!e.target.closest('.movie-modal')) {
        setModalActive(false);
        const bodyContent = document.querySelector('body')
        bodyContent.style.overflow = 'unset';
      }
    }

    modalWrapper.addEventListener('click', (e) => handleModalWrapperCLick(e))

    return () => {
      modalWrapper.removeEventListener('click', handleModalWrapperCLick)
    }
  }, [modalActive])

  const handleChangeModal = useCallback(() => {
    setModalActive(false);
    const btnClose = document.querySelector('.movie-modal-wrapper');
    const bodyContent = document.querySelector('body')
    btnClose.classList.remove('active')
    bodyContent.style.overflow = 'unset';
  }, [])


  return (
    <div className="home-screen">
        <Navbar/>
        <Banner/>
        <div className="container">
          <Row index={1} title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true} genre={genre} onChange={(movie, listGenres) => handleChange(movie, listGenres)}/>
          <Row index={2} title="Trending Now" fetchUrl={requests.fetchTrending} genre={genre} onChange={(movie, listGenres) => handleChange(movie, listGenres)}/>
          <Row index={3} title="Top Rated" fetchUrl={requests.fetchTopRated} genre={genre} onChange={(movie, listGenres) => handleChange(movie, listGenres)}/>
          <Row index={4} title="Action Movies" fetchUrl={requests.fetchActionMovies} genre={genre} onChange={(movie, listGenres) => handleChange(movie, listGenres)}/>
          <Row index={5} title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} genre={genre} onChange={(movie, listGenres) => handleChange(movie, listGenres)}/>
          <Row index={6} title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} genre={genre} onChange={(movie, listGenres) => handleChange(movie, listGenres)}/>
          <Row index={7} title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} genre={genre} onChange={(movie, listGenres) => handleChange(movie, listGenres)}/>
          <Row index={8} title="Documentaries" fetchUrl={requests.fetchDocumentaries} genre={genre} onChange={(movie, listGenres) => handleChange(movie, listGenres)}/>
        </div>
        {<MovieModal movieCurrent={movieCurrent} statActive={modalActive} movieGen={movieGen} onChange={handleChangeModal}/>}
        <Footer/>
    </div>
  )
}

export default HomeScreen
