import Footer from "@/components/footer/footer";
import NavBar from "@/components/navbar/NavBar";
import { Fragment } from "react";

export default function Layout({ children }) {
  return (
    <Fragment>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
}
