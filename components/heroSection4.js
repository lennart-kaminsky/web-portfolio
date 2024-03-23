import styled from "styled-components";

export default function HeroSection4() {
  return <HeroSectionStyled></HeroSectionStyled>;
}

const HeroSectionStyled = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.bgColorPrimary};
`;
