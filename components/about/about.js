import classes from "./about.module.css";
import Image from "next/image";

export default function About() {
  return (
    <section className={classes.container}>
      <div className={classes.left}>
        <Image
          src="/images/about-illustration.png"
          width={500}
          height={500}
          alt="about illustration"
          className={classes}
        />
      </div>
      <div className={classes.right}>
        <h1>About Us</h1>
        <p>
          Article evident arrived express highest men did boy. Mistress sensible
          entirely am so. Quick can manor smart money hopes worth too. Comfort
          produce husband boy her had hearing. Law others theirs passed but
          wishes. You day real less till dear read. Considered use dispatched
          melancholy sympathize discretion led. Oh feel if up to till like.
        </p>
      </div>
    </section>
  );
}
