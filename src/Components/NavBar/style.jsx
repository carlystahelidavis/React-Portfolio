import styled from "styled-components";

export const NavBarContainer = styled.div`
width: 100%;
height: 6rem;
display: flex
justify-content: space-around;
flex-direction: column;
align-items: center;
background-color: white;
`;

export const NavBarOptions = styled.button`
  color: white;
  background-color: #ff8c61;
  font-size: large;
  font-weight: bold;
  padding: 1rem 1rem 1rem 1rem;
  border-radius: 2rem;
  margin: 1rem 1rem 1rem 1rem;
  box-sizing: border-box;
  &:hover {
    color: black;
    background-color: #faa275;
    border: 1rem solid inside black;
  }
`;
