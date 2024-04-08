import { HeadlineStyled } from "@/styles/styled";
import { useState } from "react";
import styled from "styled-components";

export default function ContactSection() {
  const [messageSent, setMessageSent] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setSending(true);

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        console.error(`Error: ${response.status}`);
        throw new Error(`response status: ${response.status}`);
      }
      setMessageSent(true);
    } catch (error) {
      console.error(error);
    }
    setSending(false);
  }

  return (
    <section>
      <HeadlineStyled>Say hej</HeadlineStyled>
      <p>
        If you have any questions, want to get in touch with me or just want to
        chat about mountain biking, feel free to use the contact form.
      </p>
      <p>Alternatively you can write me on LinkedIn or just send a mail to</p>
      <p>blabla@blablabla.dev</p>
      {messageSent ? (
        <p>Message sent!</p>
      ) : (
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
      )}
    </section>
  );
}

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
