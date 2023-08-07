import styled from "styled-components";

export const ContactContainer = styled.div`
  height: 250px;
  width: 25%;
  border-radius: 25px;
  border: 3px solid black;
  margin: 1rem 1rem 1rem 1rem;
  background-color: black;
`;

export const Title = styled.h1`
  color: white;
`;

export const ContactInformation = styled.div`
  border-radius: 25px;
  margin: 1rem 1rem 1rem 1rem;
  height: 50%;
  text-align: left;
  padding: 0.5rem 0.5rem 1rem 0.5rem;
  background-color: white;
`;

export const WorkContainer = styled.div`
  border-radius: 25px;
  border: 3px solid black;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  margin: 1rem 1rem 1rem 1rem;
  display: flex;
  flex-direction: row;
  background-color: black;
`;

export const WorkItem = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex: wrap;
  border-radius: 25px;
  border: 3px solid black;
  margin: 1rem 1rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  width: 25%;
  justify-content: start;
  background-color: white;
  flex: wrap;
`;

export const WorkTitle = styled.h2`
  color: black;
`;

export const WorkLocation = styled.div`
  color: gray;
`;

export const WorkTimeframe = styled.div`
  color: gray;
`;

export const WorkDescription = styled.div`
  color: black;
  text-align: left;
  padding: 1rem 1rem 1rem 1rem;
`;
