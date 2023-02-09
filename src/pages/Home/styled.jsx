import styled from "styled-components";

export const ContainerBG = styled.div`
margin-bottom: 1rem;
`
export const CardMovies = styled.div`
  width: 100%;
  max-width: 1000px;
  position: relative;
  padding: 0 1rem;
  margin: auto;
  margin-bottom: 30px;
*::-webkit-scrollbar {
  width: 12px;
  height: 10px;
}

*::-webkit-scrollbar-track {
  background: transparent;
}

*::-webkit-scrollbar-thumb {
  background-color: #575757;
  border-radius: 20px;
}
`
export const Wrapper = styled.main`
  display: flex;
  padding: 10px;
  gap: 15px;
  overflow-x: scroll;
  @media (max-width: 900px){
    padding: 0px;
  }
`

export const SubTitle = styled.h2``
