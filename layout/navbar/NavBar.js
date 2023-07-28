import { useRouter } from "next/router";
import Button from "@/components/common/Button/button";
import classes from "./NavBar.module.css";
import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useState, useEffect } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import Wrapper from "@/components/common/Wrapper/Wrapper";

export default function NavBar() {
  const [hamburger, setHamburger] = useState(true);
  const [dropdown, setDropdown] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1120) {
        setHamburger(true);
      }

      if (window.innerWidth < 1120) {
        setDropdown(false);
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

  const dropdownHandler = () => {
    setDropdown(!dropdown);
  };

  const registerBtn = {
    background: "transparent",
    borderRadius: "30px",
    border: "2px solid #0f6378",
    color: "#0f6378",
    fontSize: '14px',
    padding: "10px 15px",
  };

  const loginBtn = {
    background: " #fc5757",
    borderRadius: "30px",
    border: "none",
    color: "#fff",
    fontSize: '14px',
    padding: "12px 20px",
  };

  const router = useRouter();

  const isActive = (pathname) => {
    return router.pathname === pathname ? classes.active : "";
  };

  return (
    <Wrapper>
    <div className={classes.container}>
      <div className={classes.left}>
        <Link href="/">
          <Image
            src="/images/yofo.png"
            width={50}
            height={45}
            alt="logo"
            style={{ background: "black" }}
          />
        </Link>
        {hamburger ? (
          <ul
            className={`${
              hamburger ? classes.horizontalNav : classes.horizontalNav
            }`}
          >
            <Link href="/" style={{ textDecoration: "none", color: "black" }}>
              <li className={isActive("/")}>Home</li>
            </Link>
            <Link
              href="/about"
              style={{ textDecoration: "none", color: "black" }}
            >
              <li className={isActive("/about")}>About</li>
            </Link>
            <Link
              href="/message"
              style={{ textDecoration: "none", color: "black" }}
            >
              <li className={isActive("/message")}>Message</li>
            </Link>
            <Link
              href="/create-project"
              style={{ textDecoration: "none", color: "black" }}
            >
              <li className={isActive("/create-project")}>Create Project</li>
            </Link>
        
            <div className={classes.dropdownOuter}>
              <div className={classes.dropdownIcon} onClick={dropdownHandler}>
                <span style={{fontSize: '16px'}}>More</span>
                <AiFillCaretDown />
              </div>
              {dropdown ? (
                <div className={classes.dropdownmenu}>
                  <Link
                    href="/notification"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <li className={isActive("/notification")}>Notification</li>
                  </Link>
                  <Link
                    href="/profile"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <li className={isActive("/profile")}>Profile</li>
                  </Link>
                  <Link
                    href="/shop"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <li className={isActive("/shop")}>Shop</li>
                  </Link>
                  <Link
                    href="/payment"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <li className={isActive("/payment")}>Payment</li>
                  </Link>
                  <Link
                    href="/setting"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <li className={isActive("/setting")}>Setting</li>
                  </Link>
                </div>
              ) : (
                ""
              )}
            </div>
          </ul>
        ) : (
          <div className={classes.verticalNav}>
            <Link href="/" style={{ textDecoration: "none", color: "black" }}>
              <li className={isActive("/")}>Home</li>
            </Link>
            <Link
              href="/about"
              style={{ textDecoration: "none", color: "black" }}
            >
              <li className={isActive("/about")}>About</li>
            </Link>
            <Link
              href="/message"
              style={{ textDecoration: "none", color: "black" }}
            >
              <li className={isActive("/message")}>Message</li>
            </Link>
            <Link
              href="/create-project"
              style={{ textDecoration: "none", color: "black" }}
            >
              <li className={isActive("/create-project")}>Create Project</li>
            </Link>
       
            <Link
              href="/notification"
              style={{ textDecoration: "none", color: "black" }}
            >
              <li className={isActive("/notification")}>Notification</li>
            </Link>
            <Link
              href="/profile"
              style={{ textDecoration: "none", color: "black" }}
            >
              <li className={isActive("/profile")}>Profile</li>
            </Link>
            <Link
              href="/shop"
              style={{ textDecoration: "none", color: "black" }}
            >
              <li className={isActive("/shop")}>Shop</li>
            </Link>
            <Link
              href="/payment"
              style={{ textDecoration: "none", color: "black" }}
            >
              <li className={isActive("/payment")}>Payment</li>
            </Link>
            <Link
              href="/setting"
              style={{ textDecoration: "none", color: "black" }}
            >
              <li className={isActive("/setting")}>Setting</li>
            </Link>
          </div>
        )}
      </div>
      <div className={classes.right}>
        <Link href="/login">
          <Button text={"Log In"} style={loginBtn} />
        </Link>
        <Link href="/signup">
          <Button text={"Register"} style={registerBtn} />
        </Link>
      </div>
      {hamburger ? (
        <GiHamburgerMenu onClick={hamburgerHandler} className={classes.icon} />
      ) : (
        <RxCross2 onClick={hamburgerHandler} className={classes.icon} />
      )}
    </div>
    </Wrapper>
  );
}
