import styled from "styled-components";

export const Conatiner = styled.div`
margin-bottom: 300px;
@media (max-width: 850px){
    margin-bottom: 600px;
}
`
export const ImgBg = styled.img`
width: 100%;
height: 700px;
opacity: 0.4;
@media (max-width: 700px){
   height: 300px;
}
`
export const Img = styled.img`
width: 20rem;
border-radius: 10px;
`
export const IMGIcon = styled.img`
height: 17px;
margin-bottom: 5px;
`
export const BoxNota = styled.div`
display: flex;
align-items: center;
gap: 30px;
margin-bottom: 5px;
div {
    display: flex;
    align-items: center;
    gap: 3px;
}
`
export const Intro = styled.div`
position: absolute;
padding: 5rem;
bottom: 0;
height: auto;
display: flex;
width: 100%;
justify-content: flex-end;
align-items: flex-start;
background-image: linear-gradient(rgb(0,0,0,0), rgb(0,0,0,1));
opacity: 1;
transition: opacity .3s;
@media (max-width: 700px){
    top: 9rem;
    padding: 10px;
}
`
export const Box = styled.div`
width: 100%;
margin: auto;
display: flex;
gap: 50px;
justify-content: center;
align-items: center;
@media (max-width: 700px){
 flex-direction: column;
 padding: 10px;
}
`

export const BoxVideo = styled.div`
display: flex;
justify-content: center;
margin-top: 6rem;
@media (max-width: 750px){
 display: none;
}
`

export const BoxVideoMobile = styled.div`
margin: auto;
display: none;
justify-content: center;
;
margin-top: 10rem;
@media (max-width: 750px){
 display: flex;
}
`

export const Details = styled.div`
display: flex;
align-items: center;
gap: 90px;
color: white;
`
export const Title = styled.h1`
margin-bottom: 30px;
@media (max-width: 600px){
 font-size: 1.5rem;
}
`

export const Datarelase = styled.div`
margin-bottom: 5px;
`

export const Genres = styled.div`
display: flex;
gap: 10px;
margin-bottom: 20px;
`

export const Genre = styled.div`
border: 1px solid white;
padding: 2px 5px;
border-radius: 5px;
`
export const ContaineSimilar = styled.div`
padding: 0px 2rem;
`

export const ContaineProduction = styled.div`
width: 100%;
padding: 10px;
margin: auto;
text-align: center;
`

export const ImgCompany = styled.img`
width: 6rem;
`

export const Votes = styled.p`
margin-bottom: 10px;
`

export const BoxImgCompany = styled.div`
background-color: #ffffff;
width: 10rem;
border-radius: 5px;
margin-bottom: 20px;
align-items: center;
display: flex;
align-items: center;
padding: 10px;
@media (max-width: 600px){
 padding: 5px;
}
`

export const BoxCompany = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
gap: 10px;
@media (max-width: 600px){
 gap: 5px;
}
`

export const CardSinapose = styled.div`
width: 800px;
`

export const TitleSinapose = styled.h3`
margin-bottom: 3px;
`

export const ContaineSeason = styled.div`
margin: auto;
display: flex;
width: 80%;
overflow: scroll;
padding: 10px ;
@media (max-width: 800px){
 width: 100%;
}
`
