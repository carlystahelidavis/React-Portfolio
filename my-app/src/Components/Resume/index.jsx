import {
  ContactContainer,
  ContactInformation,
  Title,
  WorkContainer,
  WorkDescription,
  WorkItem,
  WorkLocation,
  WorkTimeframe,
  WorkTitle,
} from "./style";

export const Resume = ({ resume }) => {
  return (
    <div>
      <ContactContainer>
        <Title>Carly Staheli</Title>
        <ContactInformation>
          <div>
            <h2>Contact:</h2>
            <p>801-616-6310</p>
            <p>carlystaheli@gmail.com</p>
          </div>
        </ContactInformation>
      </ContactContainer>
      <WorkContainer>
        {resume.map((info) => (
          <WorkItem>
            <WorkTitle>{info.title}</WorkTitle>
            <WorkLocation>{info.location}</WorkLocation>
            <WorkTimeframe>{info.timeline}</WorkTimeframe>
            <WorkDescription>{info.description}</WorkDescription>
          </WorkItem>
        ))}
      </WorkContainer>
    </div>
  );
};
