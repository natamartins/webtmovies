import styled from "styled-components";

export const CardMovies = styled.div`
width: 100%;
max-width: 1000px;
margin: auto;
margin-bottom: 40px;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
gap: 10px;
padding: 10px;
@media (max-width: 434px) {
max-width: fit-content;
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
padding: 2px 5px;
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
