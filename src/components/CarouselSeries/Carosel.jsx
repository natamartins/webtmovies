import React from 'react'
import { Link } from 'react-router-dom'
import * as S from '../CarouselMovies/styles'
// import CircularRate from '../CircularRate/Index'


const CaroselSeries = ({ tvseries }) => {
  const IMG_PATH = "https://image.tmdb.org/t/p/original"

  return (
    <Link style={{ textDecoration: "none", color: "white" }} to={`/tv/${tvseries ? tvseries.id : console.log("oi")}`}>
      <S.PosteIMG>
        <S.IMG src={`${IMG_PATH}${tvseries && tvseries.backdrop_path}`} />
      </S.PosteIMG>
      <S.Overlay>
        <S.ImgTitle>{tvseries ? tvseries.original_name : ""}</S.ImgTitle>
        <S.Runtime>
          {/* <S.Rating>
            <CircularRate value={tvseries.vote_average} />
          </S.Rating> */}
          <S.Relase>{tvseries ? tvseries.first_air_date : ""}</S.Relase>
        </S.Runtime>
        <S.Description>{tvseries ? tvseries.overview : ""}</S.Description>
      </S.Overlay>
    </Link>
  )
}

export default CaroselSeries
