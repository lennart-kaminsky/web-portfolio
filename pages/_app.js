import { ThemeProvider } from "styled-components";
import GlobalStyle from "@/styles/globalsstyles";
import { darkTheme, lightTheme } from "@/styles/globalsstyles";
import useSettingsStore from "@/stores/settingsStore";
import Layout from "@/components/layout";

export default function App({ Component, pageProps }) {
  const { darkMode } = useSettingsStore();

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
