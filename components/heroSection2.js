import styled from "styled-components";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function HeroSection2() {
  const [nameType, setNameType] = useState("work");
  const text = {
    work: {
      chars: "LENNART KAMINSKY".split(""),
      additionalInfo: "Web Developer".split(""),
    },
    drink: {
      chars: "LENNI".split(""),
      additionalInfo: "Cheers. Noone calls me Lennart.".split(""),
    },
    socials: {
      chars: "LENNSKI".split(),
      additionalInfo: ["insta", "youtube", "linkedIn", "spotify"],
    },
  };
  return (
    <HeroSectionStyled>
      <StyledText>
        {text[nameType].chars.map((char, index) => (
          <Headline key={char + index}>{char}</Headline>
        ))}
        {text[nameType].additionalInfo.map((char, index) => (
          <Additional key={char + index}>{char}</Additional>
        ))}
      </StyledText>
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
const StyledText = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  font-family: var(--fontHeadline);
  font-size: 20vw;
`;
const Headline = styled.span`
  font-family: var(--fontHeadline);
  font-size: 20vw;
`;

const Additional = styled.span`
  font-family: var(--fontRegular);
  font-size: 10vw;
`;

const HeroSectionStyled = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
  color: var(--fontColorLight);
  background-color: var(--bgColorDark);
  overflow: hidden;
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
