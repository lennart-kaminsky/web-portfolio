import { HeadlineStyled } from "@/styles/styled";
import { headlineAnimations } from "@/styles/stylesConfig";

export default function AboutSection() {
  return (
    <section>
      <HeadlineStyled
        variants={headlineAnimations}
        initial="initial"
        whileInView="whileInView"
      >
        About Me
      </HeadlineStyled>
    </section>
  );
}
