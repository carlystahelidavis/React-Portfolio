import { ContactForm } from "./style";

export const Contact = () => {
  return (
    <ContactForm>
      <p>NAME:</p>
      <input placeholder="Name"></input>
      <p>EMAIL ADDRESS:</p>
      <input placeholder="Email"></input>
      <p>MESSAGE:</p>
      <input placeholder="Enter message details here"></input>
    </ContactForm>
  );
};
