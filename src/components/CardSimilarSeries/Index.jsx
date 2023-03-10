import React from 'react'
import * as S from '../CardSimilarMovie/styles'
import { useParams } from 'react-router'
import { REACT_URL } from '../../api/apiUrl'
import CardSeries from '../CardSeries/Index'
import { useFetch } from '../../hooks/useFetch'

const CardSimilarSeries = () => {
  const { id } = useParams()
  const { data } = useFetch(`${REACT_URL}/tv/${id}/similar?`)
  const handleClick = () => {
    document.location.reload(true);
    window.scrollTo(0, 0)
  }
  return (
    <S.CardSimilar>
      <S.Title>Similar</S.Title>
      <S.Wrapper>
        {
          data?.map(tvseries => (
            <div onClick={() => handleClick()}>
              <CardSeries tvseries={tvseries} key={tvseries.name} />
            </div>
          ))
        }
      </S.Wrapper>
    </S.CardSimilar>
  )
}

export default CardSimilarSeries
