import { ThemeProvider } from "styled-components";
import GlobalStyle from "@/styles/globalsstyles";
import { darkTheme, lightTheme } from "@/styles/globalsstyles";
import { useLocalStorageStore } from "@/stores";
import Layout from "@/components/layout";

export default function App({ Component, pageProps }) {
  const { darkMode } = useLocalStorageStore();

  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
