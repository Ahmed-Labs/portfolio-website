import "../styles/globals.css";
import Layout from "../components/layout";
import Transition from "../components/transition";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Transition>
        <Component {...pageProps} />
      </Transition>
    </Layout>
  );
}

export default MyApp;
