import useLocalStorageState from "use-local-storage-state";
import { ThemeProvider } from "styled-components";
import getTheme from "@/utils/getTheme";
import GlobalStyle from "@/styles/globalsstyles";
import Layout from "@/components/layout";

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useLocalStorageState("theme", {
    defaultValue: "lightTheme",
  });

  function handleSetTheme(theme) {
    setTheme(theme);
  }

  return (
    <>
      <ThemeProvider theme={getTheme(theme)}>
        <GlobalStyle />
        <Layout theme={theme} onSetTheme={handleSetTheme}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
