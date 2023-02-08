import styled from "styled-components";

export const Card = styled.div`
display: inline-block;
transition: transform .2s;
position: relative;
border-radius: 10px;
overflow: hidden;
margin: 0.19rem;
cursor:pointer;
width:200px;
height:300px;
z-index:0;
border: 1px solid rgb(99, 99, 99);
:hover {
 transform: scale(1.08);
 z-index: 1000;
 box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
`

export const IMG = styled.img`
height: 300px;
`
export const IMGIcon = styled.img`
width: 13px;
margin-top: -2px;
`

export const Title = styled.h1`
font-weight: 900;
font-size: 1rem;
margin-bottom: 0.4rem;
`
export const Description = styled.p`
font-style: italic;
font-size: .75rem;
margin-bottom: 0.25rem;
`
export const CardOverlay = styled.div`
position: absolute;
padding:10px;
bottom: 0px;
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
justify-content: flex-end;
background-image: linear-gradient(rgb(0,0,0,0), rgb(0,0,0,1));
opacity: 0;
transition: opacity .2s;
:hover {
 opacity: 1;
}
`
export const CardRumtime = styled.div`
display: flex;
align-items: center;
gap: 5px;
font-size: .75rem;
margin-bottom: 0.25rem;
`
export const CardRating = styled.div`
display: flex;
align-items: center;
gap: 3px;
`
export const BoxCircula = styled.span`
`
