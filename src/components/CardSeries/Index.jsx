import React from 'react'
import * as S from '../CardMovies/styles'
import { Link } from 'react-router-dom'
import Estrela from '../../img/estrela.svg'


const CardSeries = ({ tvseries }) => {
  const IMG_PATH = "https://image.tmdb.org/t/p/w500"

  return (
    <>
      <Link style={{ textDecoration: "none", color: "white" }} to={`/tv/${tvseries.id}`}>
        <S.Card  >
          {
            tvseries ? <S.IMG src={`${IMG_PATH}${tvseries.poster_path}`} alt="" /> : null
          }
          <S.CardOverlay>
            <S.Title>{tvseries ? tvseries.original_name : "Ops! Não há nome"}</S.Title>
            <S.CardRumtime>
              {tvseries ? tvseries.release_date : ""}
              <S.CardRating>
                ( {tvseries.vote_average}
                <S.IMGIcon src={Estrela} /> )
              </S.CardRating>
            </S.CardRumtime>
            <S.Description>{tvseries ? tvseries.overview : ""}</S.Description>
          </S.CardOverlay>
        </S.Card>
      </Link>
    </>
  )
}

export default CardSeries
