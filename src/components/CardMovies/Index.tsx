import React from 'react'
import * as S from './styles'
import { Link } from 'react-router-dom'
import Estrela from '../../img/estrela.svg'
import { REACT_IMG } from '../../api/apiUrl'



const CardMovies = ({ movie }: any) => {
  return (
    <>
      <Link style={{ textDecoration: "none", color: "white" }} to={`/movie/${movie.id}`} >
        <S.Card key={movie.title} >
          {
            movie ? <S.IMG src={`${REACT_IMG}${movie.poster_path}`} alt="" /> : null
          }
          <S.CardOverlay>
            <S.Title>{movie ? movie.title : ""}</S.Title>
            <S.CardRumtime>
              {movie ? movie.release_date : ""}
              <S.CardRating>
                ( {movie.vote_average}
                <S.IMGIcon src={Estrela} /> )
              </S.CardRating>
            </S.CardRumtime>
            <S.Description>{movie ? movie.overview.slice(0, 118) + "..." : ""}</S.Description>
          </S.CardOverlay>
        </S.Card>
      </Link>
    </>
  )
}

export default CardMovies
