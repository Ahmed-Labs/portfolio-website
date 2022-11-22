import "../styles/globals.css";
import Layout from "../components/layout";
import Transition from "../components/transition";
import { ThemeProvider } from "../components/themeContext";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Layout>
        <Transition>
          <Component {...pageProps} />
        </Transition>
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
