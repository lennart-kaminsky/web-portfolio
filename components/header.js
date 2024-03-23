import Link from "next/link";
import styled from "styled-components";
import Icon from "./icons";
import { breakpoints } from "@/lib/breakpoints";

export default function Header() {
  return (
    <HeaderStyled>
      <Link href="/">lk</Link>
      <LinkContainer>
        <Link href="/">projects</Link>
        <Link href="/">about</Link>
        <Link href="/">contact</Link>
        <Icon variant="menu" />
      </LinkContainer>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.header`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  a {
    font-family: var(--fontHeadline);
    font-size: var(--fontSizeM);
    color: ${({ theme }) => theme.fontColorPrimary};
    text-decoration: none;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  a {
    font-family: var(--fontRegular);
    display: none;
    @media screen and (min-width: ${breakpoints.m}) {
      display: block;
    }
  }
  svg {
    @media screen and (min-width: ${breakpoints.m}) {
      display: none;
    }
  }
`;
