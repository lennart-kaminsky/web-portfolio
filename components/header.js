import styled from "styled-components";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { ButtonDarkMode } from "./buttons";
import { breakpoints } from "@/styles/stylesConfig";

const navigationItems = [
  { name: "Start", href: "/" },
  { name: "Projects", href: "/#projects" },
  { name: "About Me", href: "/#about" },
  { name: "Say Hej", href: "/#contact" },
];

export default function Header() {
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);

  const router = useRouter();

  function toggleBurgerMenu() {
    setBurgerMenuOpen(!burgerMenuOpen);
  }

  function handleMenuClick(href) {
    router.push(href);
    setBurgerMenuOpen(false);
  }

  return (
    <HeaderStyled>
      {/* MOBILE */}
      <BurgerMenu onClick={() => toggleBurgerMenu()}>
        <div>
          <span>M</span>
          <span>E</span>
        </div>
        <div>
          <span>N</span>
          <span>U</span>
        </div>
      </BurgerMenu>
      {burgerMenuOpen && (
        <BurgerNavigation>
          <ul>
            {navigationItems.map((item) => (
              <li key={item.name}>
                <button onClick={() => handleMenuClick(item.href)}>
                  {item.name}
                </button>
              </li>
            ))}
            <li>
              <ButtonDarkMode size="3rem" />
            </li>
          </ul>
        </BurgerNavigation>
      )}
      {/* DESKTOP */}
      <Navigation>
        <ul>
          {navigationItems.map((item) => (
            <li key={item.name}>
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
          <li>
            <ButtonDarkMode />
          </li>
        </ul>
      </Navigation>
    </HeaderStyled>
  );
}

const HeaderStyled = styled(motion.header)`
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

const BurgerMenu = styled.button`
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
  @media screen and (min-width: ${breakpoints.m}) {
    display: none;
  }
`;

const BurgerNavigation = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.bgColorSecondary};
  transition: background 1s;
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

const Navigation = styled.nav`
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
  button {
    display: flex;
  }
  @media screen and (min-width: ${breakpoints.m}) {
    display: block;
  }
`;
