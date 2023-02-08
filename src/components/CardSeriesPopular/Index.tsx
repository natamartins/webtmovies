import React from 'react'
import * as S from '../../pages/Home/styled'
import CardMovies from '../CardMovies/Index'
import { REACT_URL } from '../../api/apiUrl'
import { useFetch } from '../../hooks/useFetch'

const Index = () => {
  const { data, isFetching } = useFetch(`${REACT_URL}/tv/popular?`)

  return (
    <>
      <S.Wrapper>
        {isFetching && <p>Carregando...</p>}
        {
          data?.map(movie => (
            <CardMovies movie={movie} />
          ))
        }
      </S.Wrapper>
    </>
  )
}

export default Index

