import Background from "@/components/background";
import Header from "@/components/header";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Lennart Kaminsky | Web Developer</title>
        <meta
          name="description"
          content="Developer Portfolio of Lennart Kaminsky. See projects, used technologies and tools and get in touch."
        />
        <meta name="og:title" content="Lennart Kaminsky | Web Developer" />
        <meta
          name="og:description"
          content="Developer Portfolio of Lennart Kaminsky. See projects, used technologies and tools and get in touch."
        />
      </Head>
      <Background />
      <Header />
      <main>{children}</main>
    </>
  );
}
