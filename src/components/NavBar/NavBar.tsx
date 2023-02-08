import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import * as S from './styles'
import './styles'
import Logo from '../../img/logo.svg'

const NavBar = () => {
  const [show, setShow] = useState(false)
  const controlNavbar = () => {
    if (window.scrollY > 50) {
      setShow(true)
    } else {
      setShow(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', controlNavbar)
  }, [])

  return (
    <>
      <S.Nav className={`active ${show && 'hidden'}`}>
        <S.Logo src={Logo} />
        <S.BoxLink>
          <S.Links>
            <Link to="/">Home</Link>
          </S.Links>
          <S.Links>
            <Link to="/movies">Movies</Link>
          </S.Links>
          <S.Links>
            <Link to="/series">TV Series</Link>
          </S.Links>
        </S.BoxLink>
      </S.Nav>
      <S.NavMobile>
        <S.Links>
          <Link to="/">Home</Link>
        </S.Links>
        <S.Links>
          <Link to="/movies">Movies</Link>
        </S.Links>
        <S.Links>
          <Link to="/series">TV Series</Link>
        </S.Links>
      </S.NavMobile>
    </>
  )
}

export default NavBar
