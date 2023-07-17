import classes from "./footer.module.css";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BiLogoGmail, BiLogoLinkedinSquare } from "react-icons/bi";
export default function Footer() {
  return (
    <section className={classes.container}>
      <div>
        <BiLogoFacebookCircle className={classes.icon} />
        <AiFillTwitterCircle className={classes.icon} />
        <BiLogoGmail className={classes.icon} />
        <BiLogoLinkedinSquare className={classes.icon} />
      </div>
      <div>
        <p>© {new Date().getFullYear()} YOFA. All rights reserved.</p>
        <p>Contact us: info@yofa.com</p>
      </div>
    </section>
  );
}
