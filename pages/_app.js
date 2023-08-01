import "@/styles/globals.css";
import Layout from "@/layout/layout";
import Head from "next/head";
import SideNav from "@/components/sideNav/SideNav";
import { NavProvider } from "@/components/common/NavContext";

export default function App({ Component, pageProps }) {
  return (
    <NavProvider>
      <Layout>
        <Head>
          <link rel="icon" href="/favicon.png" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        {/* <Wrapper> */}
        <div style={{ display: "flex", width: "100%" }}>
          <nav>
            <SideNav />
          </nav>
          <main style={{ width: "100%" }}>
            <Component {...pageProps} style={{ flex: 1 }} />
          </main>
        </div>
        {/* </Wrapper> */}
      </Layout>
    </NavProvider>
  );
}
