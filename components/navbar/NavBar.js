import Button from "@/common/button";
import classes from "./NavBar.module.css";
import Image from "next/image";
import Link from "next/link";
export default function NavBar() {
  const btnStyle = {
    background: "orange",
    border: "none",
    padding: '0.6rem 1rem'
  };

  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <Link href="/">
          <Image src="/images/yofo.png" width={55} height={50} alt="logo"/>
        </Link>
        <ul>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/about">
            <li>About</li>
          </Link>
          <Link href="/message">
            <li>Message</li>
          </Link>
          <Link href="/create-project">
            <li>Create Project</li>
          </Link>
        </ul>
      </div>
      <div className={classes.right}>
        <Button text={"Sign In"} />
        <Button text={"Sign Up"} style={btnStyle}/>
      </div>
    </div>
  );
}
