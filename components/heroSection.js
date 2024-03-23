import { useState } from "react";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import styled from "styled-components";

export default function HeroSection() {
  const [nameType, setNameType] = useState("work");

  const text = {
    work: {
      names: ["LENNART", "KAMINSKY"],
      size: "11vw",
      additionalInfo: "Web Developer".split(""),
    },
    drink: {
      names: ["LENNI"],
      size: "20vw",
      additionalInfo: "Cheers. Noone calls me Lennart.".split(""),
    },
    socials: {
      names: ["LENNSKI"],
      size: "15vw",
      additionalInfo: ["insta", "youtube", "linkedIn", "spotify"],
    },
  };

  return (
    <HeroSectionStyled>
      <HeadlineContainer>
        <p>
          {text[nameType].additionalInfo.map((char, index) => (
            <AnimatePresence key={index + char}>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ scale: 0 }}
                transition={{
                  duration: 0.5,
                  delay: (index + 1) / 10 + 3,
                  scale: { delay: 0 },
                }}
              >
                {char}
              </motion.span>
            </AnimatePresence>
          ))}
        </p>
        <NameHeadlineStyled $size={text[nameType].size}>
          <AnimatePresence mode="wait">
            {text[nameType].names.map((name, index) => (
              <motion.span
                key={name}
                initial={{ x: "-100vw", scale: 1 }}
                animate={{
                  x: 0,
                  scale: 1,
                  opacity: 1,
                  rotate: [0, 3, 0, -3, 0],
                }}
                exit={{ x: 0, scale: 50, opacity: [1, 1, 0] }}
                whileHover={{ scale: 1.2 }}
                transition={{
                  x: { duration: 1 },
                  scale: { duration: 2 },
                  opacity: { duration: 2, times: [0, 0.5, 1] },
                  rotate: {
                    repeat: Infinity,
                    duration: 4,
                    ease: "linear",
                    delay: index / 5,
                  },
                }}
              >
                {name}
              </motion.span>
            ))}
          </AnimatePresence>
        </NameHeadlineStyled>
      </HeadlineContainer>

      <ButtonContainerStyled>
        <motion.button
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.9 }}
          type="button"
          onClick={() => setNameType("work")}
        >
          work
        </motion.button>
        <motion.button
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.9 }}
          type="button"
          onClick={() => setNameType("drink")}
        >
          drink
        </motion.button>
        <motion.button
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.9 }}
          type="button"
          onClick={() => setNameType("socials")}
        >
          socials
        </motion.button>
      </ButtonContainerStyled>
    </HeroSectionStyled>
  );
}

const HeroSectionStyled = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
  color: var(--fontColorLight);
  background-color: var(--bgColorDark);
  overflow: hidden;
`;

const HeadlineContainer = styled.div`
  position: absolute;
  top: 45vh;
  transform: translate(0, -50%);
  p {
    width: 100vw;
    position: absolute;
    top: 27vw;
    transform: translate(0, -50%);
    font-size: 3vw;
    padding-inline: 5vw;
    margin: 0;
  }
`;

const NameHeadlineStyled = styled.h1`
  display: flex;
  flex-direction: column;
  font-family: var(--fontHeadline);
  font-size: 12vw; // ${({ $size }) => $size}; //12vw;
  letter-spacing: 0.5rem;
  color: pink;
  /* color: var(--fontColorLight); */
  text-shadow: 0.7vw 0.7vw lightblue;
  margin: 0;
  padding-inline: 5vw;
  span {
    margin-block: -3vw;
  }
  @media screen and (max-width: 768px) {
    transform: rotate(-90deg);
    font-size: 18vw;
    position: absolute;
  }
`;

const ButtonContainerStyled = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
  gap: 1rem;
  padding: 1rem;
  button {
    border: none;
    font-size: 4vw;
    color: pink;
    background-color: transparent;
    @media (hover: hover) {
      &:hover {
        color: lightblue;
        cursor: pointer;
      }
    }
  }
`;
