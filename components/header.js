import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { breakpoints, buttonAnimations } from "@/styles/stylesConfig";
import { useLkStore } from "@/stores";
import { ButtonDarkMode } from "@/components/buttons";

const navigationItems = [
  { name: "LK", href: "/" },
  { name: "Projects", href: "/#projects" },
  { name: "About Me", href: "/#about" },
  { name: "Say Hej", href: "/#contact" },
];

export default function Header() {
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);
  const [initialShowHeader, setInitialShowHeader] = useState(false);
  const { showHeader } = useLkStore();

  const router = useRouter();

  useEffect(() => {
    const timeoutHeader = setTimeout(() => {
      setInitialShowHeader(true);
    }, 500);
    return () => clearTimeout(timeoutHeader);
  }, []);

  function toggleBurgerMenu() {
    setBurgerMenuOpen(!burgerMenuOpen);
  }

  function handleMenuClick(href) {
    router.push(href);
    setBurgerMenuOpen(false);
  }
  if (!initialShowHeader) return null;
  return (
    <HeaderStyled>
      {/* MOBILE */}
      <AnimatePresence>
        {showHeader && (
          <BurgerMenu
            onClick={() => toggleBurgerMenu()}
            variants={buttonAnimations}
            initial={{ rotate: 0, x: "-100vw" }}
            animate={{
              rotate: [0, 1080],
              y: [10, -20, 10, -20, 0],
              x: 0,
              transition: { duration: 0.5, y: { ease: "easeInOut" } },
            }}
            exit={{ rotate: [360, 0], x: "100vw" }}
            whileHover="hover"
            whileTap="tap"
          >
            <div>
              <span>M</span>
              <span>E</span>
            </div>
            <div>
              <span>N</span>
              <span>U</span>
            </div>
          </BurgerMenu>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {burgerMenuOpen && (
          <BurgerNavigation
            initial={{ scale: 0 }}
            animate={{
              scale: 1,
              transition: {
                duration: 0.5,
                ease: "backInOut",
              },
            }}
            exit={{
              opacity: 0,
            }}
          >
            <ul>
              {navigationItems.map((item) => (
                <li key={item.name}>
                  <motion.button
                    onClick={() => handleMenuClick(item.href)}
                    variants={buttonAnimations}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    {item.name}
                  </motion.button>
                </li>
              ))}
              <li>
                <ButtonDarkMode size="3rem" />
              </li>
            </ul>
          </BurgerNavigation>
        )}
      </AnimatePresence>
      {/* DESKTOP */}
      <AnimatePresence>
        {showHeader && (
          <Navigation
            initial={{ opacity: 0, x: "-100vw" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ x: "100vw" }}
          >
            <ul>
              {navigationItems.map((item) => (
                <motion.li
                  key={item.name}
                  variants={buttonAnimations}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Link href={item.href}>{item.name}</Link>
                </motion.li>
              ))}
              <li>
                <ButtonDarkMode />
              </li>
            </ul>
          </Navigation>
        )}
      </AnimatePresence>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.header`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0.5rem 3%;
  @media screen and (min-width: ${breakpoints.m}) {
    padding-top: 1rem;
  }
  @media screen and (min-width: ${breakpoints.xl}) {
    padding-inline: 6%;
  }
`;

const BurgerMenu = styled(motion.button)`
  z-index: 1;
  background: none;
  border: none;
  font-family: var(--fontHeadline);
  font-size: var(--fontSizeM);
  letter-spacing: 0.1rem;
  color: ${({ theme }) => theme.accentColorPrimary};
  line-height: 1.2rem;
  div {
    display: flex;
    justify-content: space-between;
  }
  @media (hover: hover) {
    &:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.fontColorPrimary};
    }
  }
  @media screen and (min-width: ${breakpoints.m}) {
    display: none;
  }
`;

const BurgerNavigation = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.bgColorSecondary};
  transition: background 1s;
  transform-origin: top right;
  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 0 2rem 20vh;

    button {
      background: none;
      border: none;
      font-family: var(--fontHeadline);
      font-size: 3rem;
      letter-spacing: 0.1rem;
      text-transform: uppercase;
      color: ${({ theme }) => theme.accentColorPrimary};
      @media (hover: hover) {
        &:hover {
          color: ${({ theme }) => theme.fontColorPrimary};
          cursor: pointer;
        }
      }
    }
  }
  @media screen and (min-width: ${breakpoints.m}) {
    display: none;
  }
`;

const Navigation = styled(motion.nav)`
  display: none;
  ul {
    display: flex;
    align-items: center;
    gap: 2rem;
    font-family: var(--fontHeadline);
    font-size: var(--fontSizeM);
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.accentColorPrimary};
  }
  li {
    @media (hover: hover) {
      &:hover {
        cursor: pointer;
        color: ${({ theme }) => theme.fontColorPrimary};
      }
    }
  }
  button {
    display: flex;
  }
  @media screen and (min-width: ${breakpoints.m}) {
    display: block;
  }
`;
