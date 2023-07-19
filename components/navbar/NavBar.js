import { useRouter } from "next/router";
import Button from "@/common/button";
import classes from "./NavBar.module.css";
import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useState, useEffect } from "react";

export default function NavBar() {
  const [hamburger, setHamburger] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setHamburger(true);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const hamburgerHandler = () => {
    setHamburger(!hamburger);
  };

  const btnStyle = {
    background: "orange",
    border: "none",
    padding: "0.6rem",
  };

  const router = useRouter();

  const isActive = (pathname) => {
    return router.pathname === pathname ? classes.active : "";
  };

  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <Link href="/">
          <Image src="/images/yofo.png" width={55} height={50} alt="logo" />
        </Link>
        {hamburger ? (
          <ul
            className={`${
              hamburger ? classes.horizontalNav : classes.horizontalNav
            }`}
          >
            <Link href="/" style={{ textDecoration: "none" }}>
              <li className={isActive("/")}>Home</li>
            </Link>
            <Link href="/about" style={{ textDecoration: "none" }}>
              <li className={isActive("/about")}>About</li>
            </Link>
            <Link href="/message" style={{ textDecoration: "none" }}>
              <li className={isActive("/message")}>Message</li>
            </Link>
            <Link href="/create-project" style={{ textDecoration: "none" }}>
              <li className={isActive("/create-project")}>Create Project</li>
            </Link>
          </ul>
        ) : (
          <div className={classes.verticalNav}>
            <Link href="/" style={{ textDecoration: "none" }}>
              <li className={isActive("/")}>Home</li>
            </Link>
            <Link href="/about" style={{ textDecoration: "none" }}>
              <li className={isActive("/about")}>About</li>
            </Link>
            <Link href="/message" style={{ textDecoration: "none" }}>
              <li className={isActive("/message")}>Message</li>
            </Link>
            <Link href="/create-project" style={{ textDecoration: "none" }}>
              <li className={isActive("/create-project")}>Create Project</li>
            </Link>
          </div>
        )}
      </div>
      <div className={classes.right}>
        <Link href="/login">
          <Button text={"Sign In"} />
        </Link>
        <Link href="/signup">
          <Button text={"Sign Up"} style={btnStyle} />
        </Link>
      </div>
      {hamburger ? (
        <GiHamburgerMenu onClick={hamburgerHandler} className={classes.icon} />
      ) : (
        <RxCross2 onClick={hamburgerHandler} className={classes.icon} />
      )}
    </div>
  );
}
