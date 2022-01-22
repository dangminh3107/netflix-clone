import React from 'react'
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'

function Skeletons({ type }) {
  const RowSkeleton = () => {
    const movies = new Array(10);
    return (
      <Swiper
        modules={[Navigation]}
        navigation
        loop={true}
        loopFillGroupWithBlank={true}
        slidesPerView={1}
        spaceBetween={10}
      >
          {movies.forEach((item, index) => (
            <SwiperSlide key={index} 
              className='row_poster_sklt'
            >
            </SwiperSlide>
          ))}
    </Swiper>
    )
  }

  if (type === 'row') return <RowSkeleton/>;
}

export default Skeletons
