import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import NavBar from '../../components/NavBar/NavBar'
import * as S from './styled'
import SearchIcon from '../../img/search.png'
// components
import CardCarousel from '../../components/CarouselMovies/Carosel'
import CardMovies from '../../components/CardMovies/Index'
import { useSearch } from '../../hooks/useSearch'
import Footer from '../../components/Footer/Index'

const Movie = () => {
  const { data, setSearch, searchMovies, isFetching } = useSearch("search/movie", "movie/upcoming?")

  return (
    <>
      <NavBar />
      {isFetching && <p>Carregando...</p>}
      <Carousel
        showThumbs={false}
        autoPlay={true}
        transitionTime={2}
        infiniteLoop={true}
        showStatus={false}
      >
        {
          data?.map(movie => (
            <CardCarousel movie={movie} />
          )).slice(0, 7)
        }
      </Carousel>
      <S.BoxForm onSubmit={searchMovies}>
        <S.BoxInput type="text" onChange={(e) => setSearch(e.target.value)} placeholder="Buscar Filmes... " />
        <S.BtnForm type={"submit"} ><img src={SearchIcon} alt="" /></S.BtnForm>
      </S.BoxForm>
      <S.CardMovies>
        {
          data?.map(movie => (
            <CardMovies movie={movie} />
          ))
        }
      </S.CardMovies>
      <Footer />
    </>
  )
}

export default Movie
