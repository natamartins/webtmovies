import styled from "styled-components";

export const Nav = styled.nav`
position: fixed;
width: 100%;
padding: 0px 10rem;
display: flex;
text-align: center;
align-items: center;
justify-content: space-between;
z-index: 999;
@media (max-width: 850px) {
  display: none;
  }
`;

export const Logo = styled.img`
width: 4rem;
`

export const BoxLink = styled.ul`
 display: flex;
 gap: 10px;
`
export const Links = styled.li`
position: relative;
font-size: 1rem;
text-decoration: none;
:hover{
  a {
    color: tomato;
    transition: 0.2s ease-in;
  }
  ::before{
    content: '';
    position: absolute;
    bottom: -3px;
    width: 100%;
    height: 2px;
    background-color: white;

  }
}
`
// mobile
export const NavMobile = styled.div`
display: none;
width: 100%;
height: 50px;
background-color: rgba(180, 180, 180, 0.5);
  transition: background-color 150ms ease 0s, -webkit-transform 150ms ease 0s, -webkit-backdrop-filter 150ms ease 0s;
  backdrop-filter: blur(10px);
@media (max-width: 850px) {
display: flex;
align-items: center;
justify-content: center;
gap: 30px;
position: fixed;
bottom: 0px;
z-index: 999;
  }
`
