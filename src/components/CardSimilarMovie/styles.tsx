import styled from "styled-components";

export const Wrapper = styled.main`
  display: flex;
  overflow-x: scroll;
  gap: 5px;
  margin-bottom: 2rem;
  padding: 1rem;
`;

export const CardSimilar = styled.div`
width: 100%;
margin: auto;
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

export const Title = styled.h1`
margin-bottom: 1rem;
`
