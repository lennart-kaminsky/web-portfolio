import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Image from "next/image";
import Icon from "./icons";
import { breakpoints } from "@/lib/breakpoints";

const text = {
  work: {
    before: "Hej and welcome! I'm",
    name: "Lennart Kaminsky",
    size: "2.5",
    additionalInfo: "and I'm a Junior Frontend Developer from Germany.",
    links: [
      {
        name: "linkedIn",
        url: "https://www.linkedin.com/in/lennart-kaminsky/",
      },
      {
        name: "gitHub",
        url: "https://github.com/lennart-kaminsky",
      },
      {
        name: "mail",
        url: "mailto:lennartkaminsky@gmail.com",
      },
    ],
  },
  drink: {
    before: "Wanna go for a ride or have a coffee or beer? Call me",
    name: "Lenni",
    size: "5",
    additionalInfo: "Cheers. Send it 🤙",
  },
  socials: {
    before: "In the www i usually go by",
    name: "lennski",
    size: "3.3",
    additionalInfo: ["insta", "youtube", "linkedIn", "spotify"],
  },
};

const headlineAnimationVariants = {
  animate: (index) => ({
    rotate: [0, 3, 0, -3, 0],
    transition: {
      delay: index * 0.1,
      rotate: {
        repeat: Infinity,
        duration: 3,
        ease: "linear",
        delay: index / 4,
      },
    },
  }),
  whileHover: {
    scale: 1.2,
    rotate: [0, 15, -15, 0],
    transition: {
      rotate: {
        repeat: Infinity,
        duration: 3,
        ease: ["linear", "easeIn", "linear", "linear"],
      },
    },
  },
};

export default function HeroSection3() {
  const [nameType, setNameType] = useState("work");
  return (
    <HeroSectionStyled>
      <HeroResponsiveContainer>
        <HeroFlexContainer>
          <ProfilfotoStyled
            src={
              nameType === "drink"
                ? "/images/bike.jpg"
                : "/images/profilfoto2.png"
            }
            alt="Photo of Lennart"
            width="1080"
            height="1080"
          />
          <FlexColumnContainer>
            <p>{text[nameType].before}</p>
            <HeadlineStyled>
              {text[nameType].name.split(" ").map((word, indexW) => (
                <span key={indexW}>
                  {word.split("").map((char, indexC) => (
                    <CharacterStyled
                      key={indexC}
                      $size={text[nameType].size}
                      variants={headlineAnimationVariants}
                      // initial="initial"
                      // animate="animate"
                      // custom={indexC}
                      whileHover="whileHover"
                      whileTap="whileHover"
                    >
                      {char}
                    </CharacterStyled>
                  ))}
                </span>
              ))}
            </HeadlineStyled>
            {text[nameType].additionalInfo && (
              <AdditionalInfoStyled>
                {text[nameType].additionalInfo}
              </AdditionalInfoStyled>
            )}
            {text[nameType].links && (
              <p>
                {text[nameType].links.map((link) => (
                  <a
                    href={link.url}
                    alt="LinkedIn"
                    target="_blank"
                    key={link.name}
                  >
                    <Icon variant={link.name} size="1.5rem" />
                  </a>
                ))}
              </p>
            )}
          </FlexColumnContainer>
        </HeroFlexContainer>
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
            <Icon variant="work" size="2rem" />
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
            <Icon variant="bike" size="2rem" />
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
            <Icon variant="cloud" size="2rem" />
          </motion.button>
        </ButtonContainerStyled>
      </HeroResponsiveContainer>
    </HeroSectionStyled>
  );
}
const HeroSectionStyled = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.bgColorPrimary};
`;

const HeroResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* width: 365px; */
  @media screen and (min-width: 992px) {
    width: 860px;
  }
`;

const HeroFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: ${breakpoints.s}) {
    flex-direction: row-reverse;
    align-items: center;
  }
`;

const FlexColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeadlineStyled = styled.h1`
  font-family: var(--fontHeadline);
  color: #f1f2e9;
  /* text-shadow: 0.2rem 0.2rem #637368; */
  letter-spacing: 0.5rem;
  display: flex;
  flex-direction: column;
  span {
    display: flex;
  }
`;

const CharacterStyled = styled(motion.span)`
  font-size: ${({ $size }) => `${$size}rem`};
  margin-block: ${({ $size }) => `-${$size / 4}rem`};
  @media screen and (min-width: ${breakpoints.m}) {
    font-size: ${({ $size }) => `${2 * $size}rem`};
    margin-block: ${({ $size }) => `-${(2 * $size) / 4}rem`};
  }
`;

const AdditionalInfoStyled = styled.p`
  font-family: var(--fontRegular);
  font-size: var(--fontSizeS);
`;

const ButtonContainerStyled = styled.div`
  display: flex;
  button {
    font-size: var(--fontSizeS);
    color: ${({ theme }) => theme.fontColorPrimary};
    border: none;
    background-color: transparent;
    @media (hover: hover) {
      &:hover {
        cursor: pointer;
        svg {
          fill: ${({ theme }) => theme.accentColorPrimary};
        }
      }
    }
  }
`;

const ProfilfotoStyled = styled(motion(Image))`
  object-fit: cover;
  width: 200px;
  height: 200px;
  border-radius: 100%;
  /* box-shadow: 0.2rem 0.2rem #637368; */
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 992px) {
    width: 350px;
    height: 350px;
  }
`;
