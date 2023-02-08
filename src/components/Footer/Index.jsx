import React from 'react'
import * as S from './styles'
import ImgFooter from '../../img/netflix-1.jpg'

const Footer = () => {
  return (
    <S.ContainerFooter>
      <S.ImgBg src={ImgFooter} />
      <S.TextFooter>© 2023  Tmovies - Todos os direitos reservados.</S.TextFooter>
    </S.ContainerFooter>
  )
}

export default Footer
