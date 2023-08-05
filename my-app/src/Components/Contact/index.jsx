import { ContactForm } from "./style";

export const Contact = () => {
  return (
    <ContactForm>
      <p>Name:</p>
      <input placeholder="Name"></input>
      <p>Email Address:</p>
      <input placeholder="Email"></input>
      <p>Message:</p>
      <input placeholder="Enter message details here"></input>
    </ContactForm>
  );
};
