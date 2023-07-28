import Footer from "@/layout/footer/footer";
import NavBar from "@/layout/navbar/NavBar";
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
