import Layout from "../components/layout/layout";
import "../styles/globals.css";

// 모든 페이지의 루트 컴포넌트
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
