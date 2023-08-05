import {
    ContactContainer,
    ContactDetails,
    Title,
    WorkExperienceContainer,
    WorkExperienceDescription,
    WorkExperienceItem,
    WorkExperienceLocation,
    WorkExperienceTimeframe,
    WorkExperienceTitle,
    } from "./styles";
    
    export const Resume = ({ resume }) => {
    return (
    <div>
    <ContactContainer>
    <Title>Joshua Davis</Title>
    <ContactDetails>
    <div>
    <h2>Contact:</h2>
    <p>(801) 687-8089</p>
    <p>jmichaeldavis17@gmail.com</p>
    </div>
    </ContactDetails>
    </ContactContainer>
    <WorkExperienceContainer>
    {resume.map((info) => (
    <WorkExperienceItem>
    <WorkExperienceTitle>{info.title}</WorkExperienceTitle>
    <WorkExperienceLocation>{info.location}</WorkExperienceLocation>
    <WorkExperienceTimeframe>{info.timeline}</WorkExperienceTimeframe>
    <WorkExperienceDescription>
    {info.description}
    </WorkExperienceDescription>
    </WorkExperienceItem>
    ))}
    </WorkExperienceContainer>
    </div>
    );
    };