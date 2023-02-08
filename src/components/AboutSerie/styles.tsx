import styled from "styled-components";


export const ContainerBG = styled.div`
margin-bottom: 5rem;
`
export const ImgBg = styled.span`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    z-index: -1;
    background-repeat: no-repeat;
    background-size: cover;
`;

export const IMG = styled.img`
width: 15rem;
border-radius: 10px;
position: relative;
@media (max-width: 600px){
    width: 9rem;
}
`

export const BoxTitle = styled.div`
@media (max-width: 700px){
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}
`
export const Title = styled.h1`
font-size: 2rem;
@media (max-width: 600px){
    font-size: 1.5rem;
    margin-bottom: 5px;
}
`
export const Description = styled.p`
margin-bottom: 2rem;
@media (max-width: 900px){
    /* display: none; */
}
`

export const Sinapose = styled.p`
@media (max-width: 900px){
    /* display: none; */
}
`

export const Button = styled.button`
display: flex;
align-items: center;
border: none;
gap: 5px;
color: #fff;
background-color: transparent;
cursor: pointer;
transition: 0.2s ease-in;
border-radius: 30px;
svg{
  width: 35px;
  height: 35px;
  transition: 0.2s ease-in;
}
:hover {
  color: #adadad;
}
:hover svg {
  fill: #adadad;
}
`
export const BoxVideo = styled.div`
width: 700px;
margin: auto;
padding:30px 10px;
display: flex;
justify-content: center;
border-radius: 5px;
background-color: #222;
margin-top: 10rem;
`

export const BoxPay = styled.div`
display: flex;
align-items: center;
gap: 1rem;
margin-bottom: 10px;
@media (max-width: 600px){
  gap: 20px;
  margin-bottom: 5px;
}
`

export const BoxAvergae = styled.div`
color: #fff;
`
export const Genres = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 5px;
color: white;
margin-bottom: 5px;
margin-bottom: 1rem;
color: #adadad;
@media (max-width: 600px){
 background-color: #0e0d0d;
 padding: 5px;
 border-radius: 5px;
}
`
export const Genre = styled.div`
`

export const NetWork = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
gap: 5px;
@media (max-width: 600px){
  margin-bottom: 15px;
}
`

export const Tagline = styled.p`
margin-bottom: 10px;
color: #999;
`

export const LogoNet = styled.div`
background-color: white;
padding: 5px;
border-radius: 10px;
display: flex;
`

export const Logo = styled.img`
width: 30px;
`
