import React from 'react'
import { Link } from 'react-router-dom'
import * as S from './styles'
// import CircularRate from '../CircularRate/CircularRate'


const Carosel = ({ movie }: any) => {
  const IMG_PATH = "https://image.tmdb.org/t/p/original"

  return (
    <Link style={{ textDecoration: "none", color: "white" }} to={`/movie/${movie.id}`}>
      <S.PosteIMG>
        <S.IMG src={`${IMG_PATH}${movie && movie.backdrop_path}`} />
      </S.PosteIMG>
      <S.Overlay>
        <S.ImgTitle>{movie ? movie.original_title : ""}</S.ImgTitle>
        <S.Runtime>
          {/* <S.Rating>
            <CircularRate value={movie.vote_average} />
          </S.Rating> */}
          <S.Relase>{movie ? movie.release_date : ""}</S.Relase>
        </S.Runtime>
        <S.Description>{movie ? movie.overview : ""}</S.Description>
      </S.Overlay>
    </Link>
  )
}

export default Carosel
