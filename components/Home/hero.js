import Button from "../common/Button/button";
import classes from "./hero.module.css";
import Image from "next/image";
import Link from "next/link";
import Wrapper from "../common/Wrapper/Wrapper";
export default function HeroSection() {
  const btnStyle = {
    background: "#fc5757",
    border: "none",
    padding: "0.8rem 3rem",
    fontWeight: "500",
    borderRadius: "30px",
  };

  return (
    <Wrapper>
    <section className={classes.container}>
      <div className={classes.left}>
        <h1>Discover our Swapsters</h1>
        <p>
          Join the Swapsters community, where mutual aid is the golden rule!
          Offer your skills to help others and in turn benefit from the
          expertise of the community.
        </p>
        <Link href="/login">
          <Button text={"Begin"} style={btnStyle} />
        </Link>
      </div>
      <div className={classes.right}>
        <Image
          src="/images/team.png"
          width={500}
          height={550}
          alt="illustration"
          className={classes.img}
        />
      </div>
    </section>
    </Wrapper>
  );
}
