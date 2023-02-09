import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useFetch } from '../../hooks/useFetch'
import { REACT_URL } from '../../api/apiUrl'
import * as S from './styled'
// components
import CardCarousel from '../../components/CarouselMovies/Carosel'
import AllDayTrend from '../../components/AllDayTrend/Index';
import NavBar from '../../components/NavBar/NavBar'
import CardMoviesPopular from '../../components/CardMoviesPopular/Index'
import CardSeriesPopular from '../../components//CardSeriesPopular/Index'
import Footer from '../../components/Footer/Index';

const Home = () => {
  const { data, isFetching } = useFetch(`${REACT_URL}/movie/popular?`)

  return (
    <>
      <S.ContainerBG>
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
      </S.ContainerBG>
      <S.CardMovies>
        <S.SubTitle>Tendencias Hoje</S.SubTitle>
        <AllDayTrend />
      </S.CardMovies>
      <S.CardMovies>
        <S.SubTitle>Filmes Popular</S.SubTitle>
        <CardMoviesPopular />
      </S.CardMovies>
      <S.CardMovies>
        <S.SubTitle>Series Popular</S.SubTitle>
        <CardSeriesPopular />
      </S.CardMovies>
      <Footer />
    </>
  )
}

export default Home
