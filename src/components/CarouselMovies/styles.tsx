import styled from "styled-components";


export const PosteIMG = styled.div`
height: auto;
@media (max-width: 400px){
    img {
    height: 250px;
}
}
`
export const IMG = styled.img`
opacity: 0.6;
height: 700px;
@media (max-width: 1000px){
   height: auto;
}
`


export const IMGIcon = styled.img`
height: 30px;
margin-bottom: 5px;
`


export const Overlay = styled.div`
width: 100%;
height: auto;
position: absolute;
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: flex-start;
padding:5rem 10rem;
bottom: 0px;
background-image: linear-gradient(rgb(0,0,0,0), rgb(0,0,0,1));
opacity: 1;
transition: opacity .3s;
@media (max-width: 850px){
    padding: 2rem 5rem;
    bottom: -0.5rem;
}
`

export const ImgTitle = styled.h1`
font-weight: 900;
font-size: 2.5rem;
margin-bottom: 0.4rem;
text-align: left;
@media (max-width: 900px){
    font-size: 1.5rem;
}
@media (max-width: 600px){
   font-size: 1rem;
}
`

export const Relase = styled.p`
@media (max-width: 850px){
    font-size: 15px;
}
`

export const Runtime = styled.div`
display: flex;
align-items: center;
gap: 20px;
justify-content: center;
font-size: 2rem;
margin-bottom: 1rem;
@media (max-width: 390px){
}
`

export const Rating = styled.span`
margin-top: 7px;
`

export const Description = styled.p`
font-style: italic;
font-size: 1rem;
margin-bottom: 0.25rem;
display: flex;
text-align: left;
@media (max-width: 600px){
    display: none;
}
`
