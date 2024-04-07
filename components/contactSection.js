import { HeadlineStyled } from "@/styles/styled";
import styled from "styled-components";

export default function ContactSection() {
  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    // console.log("client form data", data);

    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      console.error(`Error: ${response.status}`);
    }
  }

  return (
    <section>
      <HeadlineStyled>Say Hi</HeadlineStyled>
      <ContactForm onSubmit={handleSubmit}>
        <label htmlFor="name">Name </label>
        <input
          id="name"
          name="name"
          type="text"
          maxLength="50"
          placeholder="Jeff Bezos"
          autoComplete="name"
          required
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          maxLength="60"
          placeholder="jeffbezos@amazon.com"
          autoComplete="email"
          required
        />
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="6"
          placeholder="I wanna hire you!"
        />
        <button type="submit">Send Message</button>
      </ContactForm>
    </section>
  );
}

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
