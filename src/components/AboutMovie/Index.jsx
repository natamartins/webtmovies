import React from 'react'
import { REACT_IMG } from '../../api/apiUrl'
// import CircularRate from '../CircularRate/CircularRate'
import * as S from './styles'


const AboutMovies = ({ data, selectMovie }) => {
  console.log(data)
  return (
    <>
      {
        data && <S.IMG src={`${REACT_IMG}${data.poster_path}`} alt="" />
      }
      <S.BoxTitle>
        <S.Title>{data ? data.original_title : ""}</S.Title>
        <p >{data ? "Data de lançamento: " + data.release_date : ""}</p>
        <S.Genres>
          {
            data && data.genres
              ?
              data.genres.map(genre => (
                <><S.Genre className="movie__genre" id={genre.id}>{genre.name}</S.Genre></>
              ))
              :
              ""
          }
        </S.Genres>
        <S.BoxPay>
          {/* <S.BoxAvergae>
            <CircularRate value={data ? data.vote_average : ""} />
          </S.BoxAvergae> */}
          <S.Button onClick={() => selectMovie()} >
            <svg viewBox="0 0 256 256" fill="#fff" xmlns="http://www.w3.org/2000/svg">
              <rect fill="none" height="256" width="256" />
              <path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm36.4,110.7-48,32A8.7,8.7,0,0,1,112,168a8.5,8.5,0,0,1-3.8-.9A8,8,0,0,1,104,160V96a8,8,0,0,1,4.2-7.1,8.3,8.3,0,0,1,8.2.4l48,32a8,8,0,0,1,0,13.4Z" />
            </svg>Reproduzir Trailer
          </S.Button>
        </S.BoxPay>
        <S.Sinapose>Sinapose</S.Sinapose>
        <S.Tagline>"{data ? data.tagline : ""}"</S.Tagline>
        <S.Description>{data ? data.overview : ""}</S.Description>
      </S.BoxTitle>

    </>
  )
}

export default AboutMovies
