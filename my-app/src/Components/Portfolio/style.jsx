import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const ProjectContainer = styled.div`
  display: flex;
  width: 100%;
  height: 80rem;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: black;
  margin-bottom: 7rem;
`;

export const ProjectBox = styled.div`
width: 50rem;
height:  25%;
border-radius: 25px;
background-color: white;
flex: wrap;
margin: 1rem 1rem 1rem 1rem;
display: flex;
flex-direction: column;
align-items: center;
border: 3px solid black;
`

export const ProjectName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  font-size: 20px;
  color: black;
  padding: 1rem;
  font-weight: 800;
`;

export const DeployedLinkButton = styled.a`
  color: white;
  background-color: light blue;
  font-size: large;
  font-weight: bold;
  padding: 1rem 1rem 1rem 1rem;
  border-radius: 2rem;
  box-sizing: border-box;
  width: 8rem;
  display: flex;
  text-decoration: none;
  margin: 0.5rem;
  align-items: center;
  justify-content: center;
  height: 2.5rem;
  &:hover {
  color: black;
  background-color: white;
  border: 3px solid black;
  }
`