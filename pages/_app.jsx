import { OppositeSlugProvider } from "context/oppositeSlugContext";
import { LocationProvider } from "context/locationContext";
import Layout from "../components/layouts/MainLayout";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <OppositeSlugProvider>
      <LocationProvider>
        <Layout header={pageProps.header} footer={pageProps.footer}>
          <Component {...pageProps} />
        </Layout>
      </LocationProvider>
    </OppositeSlugProvider>
  );
}

export default MyApp;
