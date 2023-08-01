import Button from "@/components/common/Button/button";
import classes from "./NavBar.module.css";
import Image from "next/image";
import Link from "next/link";
import Wrapper from "@/components/common/Wrapper/Wrapper";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useContext } from "react";
import NavContext from "@/components/common/NavContext";

export default function NavBar() {
  const { isOpen, setIsOpen } = useContext(NavContext);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const registerBtn = {
    background: "transparent",
    borderRadius: "30px",
    border: "2px solid #0f6378",
    color: "#0f6378",
    fontSize: "14px",
    padding: "10px 15px",
  };

  const loginBtn = {
    background: " #fc5757",
    borderRadius: "30px",
    border: "none",
    color: "#fff",
    fontSize: "14px",
    padding: "12px 20px",
  };

  return (
    <Wrapper>
      <div className={classes.container}>
        <div>
          <Link href="/">
            <Image
              src="/images/yofo.png"
              width={50}
              height={45}
              alt="logo"
              style={{ background: "black", marginLeft: "2rem" }}
            />
          </Link>
          {!isOpen ? (
            <GiHamburgerMenu className={classes.icon} onClick={handleClick} />
          ) : (
            <RxCross2 className={classes.icon} onClick={handleClick} />
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
      </div>
    </Wrapper>
  );
}
