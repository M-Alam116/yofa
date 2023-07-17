import Button from "@/common/button";
import classes from "./hero.module.css";
import Image from "next/image";
export default function HeroSection() {

const btnStyle = {
  background: 'orange',
  border: 'none',
  padding: '0.8rem 1.2rem',
  fontWeight: '500',
  borderRadius: '50px'
}

  return (
    <section className={classes.container}>
      <div className={classes.left}>
        <h1>WELCOME TO <span>YOFA</span> PLATFORM</h1>
        <p>
          We provide platform for our customers where they just not only manage
          their projects but can also carry out the services of their of own.
        </p>
        <Button text={"Read More"} style={btnStyle}/>
      </div>
      <div className={classes.right}>
        <Image
          src="/images/hero-illustration.png"
          width={500}
          height={550}
          alt="illustration"
          className={classes.img}
        />
      </div>
    </section>
  );
}
