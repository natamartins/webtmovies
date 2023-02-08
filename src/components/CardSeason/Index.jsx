import React from 'react'
import * as S from './styles'
import { Link } from 'react-router-dom'
import Estrela from '../../img/estrela.svg'


const Index = ({ se }) => {
  const IMG_PATH = "https://image.tmdb.org/t/p/w500"

  return (
    <>
      <Link style={{ textDecoration: "none", color: "white" }} to={`/tv/${se.id}`}>
        <S.Card key={se.title} >
          {
            se ? <S.IMG src={`${IMG_PATH}${se.poster_path}`} alt="" /> : null
          }
          <S.CardOverlay>
            <S.Title>{se ? se.title : "Ops! Não há nome"}</S.Title>
            <S.CardRumtime>
              {se ? se.release_date : ""}
              <S.CardRating>
                ( {se.vote_average}
                <S.IMGIcon src={Estrela} /> )
              </S.CardRating>
            </S.CardRumtime>
            <S.Description>{se ? se.overview : ""}</S.Description>
          </S.CardOverlay>
        </S.Card>
      </Link>

    </>
  )
}

export default Index
