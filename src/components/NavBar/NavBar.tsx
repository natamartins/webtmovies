import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import * as S from './styles'
import './styles.css'
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
            <NavLink to="/">Home</NavLink>
          </S.Links>
          <S.Links>
            <NavLink to="/movies">Movies</NavLink>
          </S.Links>
          <S.Links>
            <NavLink to="/series">TV Series</NavLink>
          </S.Links>
        </S.BoxLink>
      </S.Nav>
      <S.NavMobile >
        <S.Links>
          <NavLink to="/">Home</NavLink>
        </S.Links>
        <S.Links>
          <NavLink to="/movies">Movies</NavLink>
        </S.Links>
        <S.Links>
          <NavLink to="/series">TV Series</NavLink>
        </S.Links>
      </S.NavMobile>
    </>
  )
}

export default NavBar
