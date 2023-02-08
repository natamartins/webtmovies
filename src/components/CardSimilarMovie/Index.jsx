import React from 'react'
import * as S from './styles'
import { useParams } from 'react-router'
import { REACT_URL } from '../../api/apiUrl'

import CardMovies from '../CardMovies/Index'
import { useFetch } from '../../hooks/useFetch'

const CardSimilar = () => {
  const { id } = useParams()
  const { data } = useFetch(`${REACT_URL}/movie/${id}/similar?`)
  const handleClick = () => {
    document.location.reload(true)
    window.scrollTo(0, 0)
  }

  return (
    <div>
      <h1>similar</h1>
      <S.Wrapper>
        {
          data && data.map(movie => (
            <div onClick={() => handleClick()}>
              <CardMovies movie={movie} />
            </div>
          ))
        }
      </S.Wrapper>
    </div>
  )
}

export default CardSimilar
