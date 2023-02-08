import React from 'react'
import { useParams } from 'react-router'
import * as S from './styles'
import { useMovieSolo } from '../../hooks/useMovieSolo'

import { REACT_IMG_PATH, REACT_URL } from '../../api/apiUrl'
import YouTube from 'react-youtube'
import YouTubeMobile from '@u-wave/react-youtube';
import { Modal, Box } from '@material-ui/core'
// components
import AboutSeries from '../../components/AboutSerie/Index'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Index'
import CarsSeason from '../../components/CardSeason/Index'
import CardSimilar from '../../components/CardSimilarSeries/Index'
import { useFetchVideos } from '../../hooks/useFetchVideo'

const optsDek = {
  height: '500',
  width: '940',
  // playerVars: {
  //     autoplay: 1,
  // },
};

const SeriesSolo = () => {
  const { id, } = useParams()
  const { data, select, setSelect } = useMovieSolo(`${REACT_URL}/tv/${id}?`)
  const { fetchVideo } = useFetchVideos('tv')

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const selectMovie = async () => {
    const res = await fetchVideo(data.id)
    setSelect(res)
    handleOpen()
  }
  console.log(select)
  // this function starts youtube movies
  const playMovie = () => {
    const trailer = select.videos.results[0]
    return (
      <YouTube videoId={trailer.key} opts={optsDek} />
    )
  }
  const playMovieMobile = () => {
    const trailer = select.videos.results[0]
    return (
      <YouTubeMobile video={trailer.key} width="400" height="300" />
    )
  }

  return (
    <>
      <NavBar />
      <S.Conatiner>
        <S.ImgBg src={`${REACT_IMG_PATH}${data ? data.backdrop_path : ""}`} />
      </S.Conatiner>
      <S.Intro>
        <S.Box>
          <AboutSeries data={data} selectMovie={selectMovie} />
          <Modal
            open={open}
            onClose={handleClose}
          >
            <Box>
              <S.BoxVideo>
                {
                  select.videos ? playMovie() : ""
                }
              </S.BoxVideo>
              <S.BoxVideoMobile>
                {
                  select.videos ? playMovieMobile() : ""
                }
              </S.BoxVideoMobile>

            </Box>
          </Modal>
        </S.Box>
      </S.Intro>
      <S.ContaineProduction>
        <S.Title>Temporadas</S.Title>
        <S.ContaineSeason>
          {
            data && data.seasons.map(se => (
              <CarsSeason se={se} />
            ))
          }
        </S.ContaineSeason>
      </S.ContaineProduction>
      <S.ContaineProduction>
        <S.Title>Empresas Produtoras </S.Title>
        <S.BoxCompany>
          {
            data && data.production_companies && data.production_companies.map(company => (
              <>
                {
                  company.logo_path
                  &&
                  <S.BoxImgCompany className="productionCompanyImage">
                    <S.ImgCompany src={`${REACT_IMG_PATH}` + company.logo_path} />
                  </S.BoxImgCompany>
                }
              </>

            ))
          }
        </S.BoxCompany>
      </S.ContaineProduction>
      <S.ContaineSimilar>
        <CardSimilar />
      </S.ContaineSimilar>
      <Footer />
    </>
  )
}

export default SeriesSolo
