import styled from "styled-components";

export const ContainerBG = styled.div`
/* height: 400px; */
margin-bottom: 5rem;
background-image: linear-gradient(rgb(0,0,0,0), rgb(0,0,0,1));
`
export const ImgBg = styled.span`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    z-index: -1;
    background-repeat: no-repeat;
    background-size: cover;
    /* opacity: 0.3; */
`;

export const IMG = styled.img`
width: 15rem;
border-radius: 10px;
@media (max-width: 900px){
    width: 10rem;
}
`
export const Box = styled.div`
width: 1000px;
margin: auto;
display: flex;
gap: 50px;
justify-content: center;
align-items: center;
`

export const BoxTitle = styled.div`
@media (max-width: 600px){
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
}
`
export const Title = styled.h1`
font-size: 2rem;
margin-bottom: 0.5rem;
@media (max-width: 900px){
    font-size: 1.5rem;
    margin-bottom: 1rem;
}
`
export const Description = styled.p`
margin-bottom: 2rem;
`
export const Tagline = styled.p`
color: #999;
font-size: 1rem;
margin-bottom: 5px;
`

export const Sinapose = styled.p`
margin-bottom: 0.5rem;
@media (max-width: 900px){
    display: none;
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
margin-bottom: 15px;
`

export const BoxAvergae = styled.div`
color: #fff;
`
export const Genres = styled.div`
display: flex;
flex-wrap: wrap;
gap: 5px;
color: white;
margin-bottom: 0.9rem;
`
export const Genre = styled.div`
`
