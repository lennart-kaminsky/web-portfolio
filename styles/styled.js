import styled from "styled-components";
import { motion } from "framer-motion";
import { breakpoints } from "@/styles/stylesConfig";

export const HeadlineStyled = styled(motion.h1)`
  font-family: var(--fontHeadline);
  font-size: var(--fontSizeXL);
  line-height: 3.4rem;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  @media screen and (min-width: ${breakpoints.l}) {
    font-size: var(--fontSizeXXL);
    line-height: 5rem;
  }
`;
