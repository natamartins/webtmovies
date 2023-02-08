import styled from "styled-components";

export const BoxMovies = styled.div`
width: 70%;
margin: auto;
margin-bottom: 40px;
display: grid;
gap: 10px;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
@media (max-width: 434px) {
max-width: fit-content;
}
`
export const Container = styled.div`
height: auto;
margin-bottom: 60px;
background-image: linear-gradient(rgb(0,0,0,0), rgb(0,0,0,1));
`

export const ImgBg = styled.span`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 600px;
    z-index: -1;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.6;
`

export const Box = styled.div`
width: 1000px;
margin: auto;
display: flex;
gap: 50px;
justify-content: center;
align-items: center;
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

export const BoxCategory = styled.div`
width: 800px;
overflow-x: scroll;
margin: auto;
display: flex;
gap: 10px;
padding: 5px;
margin-bottom: 90px;
`

export const Btn = styled.button`
position: relative;
 color: white;
 background-color: transparent;
 cursor: pointer;
 transition: 0.2s ease-in;
 :hover {
    color: tomato;
    ::before {
        content: '';
        position: absolute;
        bottom: 0px;
        width: 100%;
        height: 3px;
      background-color: white;
    }
 }
`

export const BoxForm = styled.form`
width: 300px;
margin: auto;
margin-bottom: 2rem;
display: flex;
padding: 4px;
justify-content: space-between;
align-items: center;
background-color: white;
border-radius: 5px;
img{
  width: 15px;
}
`

export const BoxInput = styled.input`
border: none;
padding: 2px 30px;
border-radius: 5px;
`

export const BtnForm = styled.button`
border-radius: 5px;
padding: 2px 5px;
display: flex;
align-items: center;
gap: 1px;
border: none;
cursor: pointer;
`
