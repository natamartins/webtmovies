import React from 'react'
import * as S from './styles'
import { useSearch } from '../../hooks/useSearch'
import { Carousel } from 'react-responsive-carousel'
// Components
import CardSeries from '../../components/CardSeries/Index'
import CarouselSeries from '../../components//CarouselSeries/Carosel'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Index'
import SearchIcon from '../../img/search.png'

const TvMovie = () => {
  const { data, setSearch, searchMovies } = useSearch("search/tv?", "tv/top_rated?")

  return (
    <>
      <S.Container>
        <NavBar />
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={4}
          infiniteLoop={true}
          showStatus={false}
        >
          {
            data.map(tvseries => (
              <CarouselSeries tvseries={tvseries} key={tvseries.name} />
            )).slice(0, 7)
          }
        </Carousel>
      </S.Container>
      <S.BoxForm onSubmit={searchMovies}>
        <S.BoxInput type="text" onChange={(e) => setSearch(e.target.value)} placeholder="Buscar Filmes... " />
        <S.BtnForm type={"submit"} ><img src={SearchIcon} alt="" /></S.BtnForm>
      </S.BoxForm>
      <S.BoxMovies>
        {
          data.map(tvseries => (
            <CardSeries tvseries={tvseries} key={tvseries.name} />
          ))
        }
      </S.BoxMovies>
      <Footer />
    </>
  )
}

export default TvMovie
