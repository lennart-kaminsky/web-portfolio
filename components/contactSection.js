import { useState } from "react";
import styled, { useTheme } from "styled-components";
import { motion, useAnimationControls } from "framer-motion";
import { links } from "@/lib/data";
import { HeadlineStyled } from "@/styles/styled";
import {
  breakpoints,
  buttonAnimations,
  fontSizes,
  inputAnimations,
  opacityAnimations,
} from "@/styles/stylesConfig";
import Icon from "@/components/icons";

export default function ContactSection() {
  const [messageSent, setMessageSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  const theme = useTheme();
  const formControls = useAnimationControls();

  async function handleSubmit(event) {
    event.preventDefault();
    setSending(true);

    formControls.start({
      scale: 0.4,
      y: -200,
      opacity: 0,
      transition: {
        scale: {
          duration: 0.3,
        },
        y: {
          delay: 0.35,
          duration: 0.4,
          ease: "backInOut",
        },
        opacity: {
          delay: 0.55,
          duration: 0.2,
        },
      },
    });

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
      setError(false);
    } catch (error) {
      console.log("test");
      console.error(error);
      formControls.start({ scale: 1, y: 0, opacity: 1 });
      setError(true);
      setSending(false);
    }
    setSending(false);
  }

  return (
    <ContactSectionStyled id="contact">
      <ContactText>
        <HeadlineStyled
          variants={opacityAnimations}
          initial="initial"
          whileInView="whileInView"
        >
          Say hej
        </HeadlineStyled>

        <motion.p
          variants={opacityAnimations}
          initial="initial"
          whileInView="whileInView"
          viewport={{ amount: 1, once: true }}
        >
          If you have any questions, want to get in touch with me or just want
          to chat about web development or mountain biking, feel free to use the
          contact form.
        </motion.p>
        <motion.p
          variants={opacityAnimations}
          initial="initial"
          whileInView="whileInView"
          viewport={{ amount: 1, once: true }}
        >
          Alternatively you can write me on LinkedIn or just send a mail to
        </motion.p>
        <EmailLink
          href="mailto:hej@lennartkaminsky.dev"
          variants={buttonAnimations}
          whileHover="hover"
          whileTap="tap"
        >
          hej@lennartkaminsky.dev
        </EmailLink>
        <IconLinks>
          {links.slice(0, 2).map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              alt={link.name}
              target="_blank"
              variants={buttonAnimations}
              whileHover="hover"
              whileTap="tap"
            >
              <Icon
                variant={link.icon}
                size={fontSizes.l}
                color={theme.accentColorPrimary}
              />
            </motion.a>
          ))}
        </IconLinks>
      </ContactText>
      <FormContainer>
        {messageSent ? (
          !sending && (
            <motion.div
              initial={{ y: 200, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: {
                  y: { delay: 1, duration: 0.4, ease: "backInOut" },
                  opacity: { delay: 1, duration: 0.1 },
                },
              }}
            >
              <p>Thank you for your message!</p>
              <p> I will reach out to you as soon as possible. ✌🏻</p>
            </motion.div>
          )
        ) : (
          <ContactForm onSubmit={handleSubmit} animate={formControls}>
            {error && <p>This did{"'"}t work. Please try again.</p>}
            <label htmlFor="name">
              Your name
              <motion.input
                id="name"
                name="name"
                type="text"
                maxLength="50"
                autoComplete="name"
                required
                variants={inputAnimations}
                initial="initial"
                whileInView="whileInView"
                viewport={{ amount: 1, once: true }}
              />
            </label>
            <label htmlFor="email">
              Your email
              <motion.input
                id="email"
                name="email"
                type="email"
                maxLength="60"
                autoComplete="email"
                required
                variants={inputAnimations}
                initial="initial"
                whileInView="whileInView"
                viewport={{ amount: 1, once: true }}
              />
            </label>
            <label htmlFor="message">
              What do you want to tell me?
              <motion.textarea
                id="message"
                name="message"
                rows="4"
                variants={inputAnimations}
                initial="initial"
                whileInView="whileInView"
                viewport={{ amount: 1, once: true }}
              />
            </label>
            <motion.button
              type="submit"
              variants={buttonAnimations}
              whileHover="hover"
              whileTap="tap"
              whileInView={{
                scale: [1, 1.1, 1],
                transition: { delay: 1, duration: 0.8, repeat: 1 },
              }}
            >
              Send it!
            </motion.button>
          </ContactForm>
        )}
      </FormContainer>
    </ContactSectionStyled>
  );
}

const ContactSectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  ${HeadlineStyled} {
    color: ${({ theme }) => theme.accentColorPrimary};
  }
  @media screen and (min-width: ${breakpoints.s}) {
    flex-direction: row;
  }
`;

const ContactText = styled.div`
  height: 410px;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  p {
    max-width: 500px;
  }
  @media screen and (min-width: ${breakpoints.s}) {
    width: 50%;
    justify-content: space-between;
  }
`;

const EmailLink = styled(motion.a)`
  font-family: var(--fontHeadline);
  color: ${({ theme }) => theme.accentColorPrimary};
  letter-spacing: 0.1rem;
  align-self: start;
  @media (hover: hover) {
    &:hover {
      color: ${({ theme }) => theme.fontColorPrimary};
    }
  }
  @media screen and (min-width: ${breakpoints.m}) {
    font-size: var(--fontSizeM);
  }
  @media screen and (min-width: ${breakpoints.l}) {
    font-size: var(--fontSizeL);
  }
`;

const IconLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  svg {
    @media (hover: hover) {
      &:hover {
        fill: ${({ theme }) => theme.fontColorPrimary};
      }
    }
  }
`;

const FormContainer = styled.div`
  width: 100%;
  height: 410px;
  max-width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: ${breakpoints.s}) {
    width: 50%;
  }
`;

const ContactForm = styled(motion.form)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    color: ${({ theme }) => theme.accentColorPrimary};
  }

  label {
    display: flex;
    flex-direction: column;
  }

  input,
  textarea {
    all: unset;
    border-bottom: ${({ theme }) => `0.3rem solid ${theme.accentColorPrimary}`};
    padding: 0.5rem;
    transform-origin: left;
    @media (hover: hover) {
      &:hover {
        cursor: text;
      }
    }
  }

  button {
    align-self: flex-start;
    background: none;
    font-family: var(--fontHeadline);
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.accentColorPrimary};
    border: ${({ theme }) => `0.2rem solid ${theme.accentColorPrimary}`};
    border-radius: 2rem;
    padding: 0.5rem 1.5rem;
    @media (hover: hover) {
      &:hover {
        background-color: ${({ theme }) => theme.accentColorPrimary};
        color: ${({ theme }) => theme.bgColorPrimary};
        cursor: pointer;
      }
    }
  }
`;
