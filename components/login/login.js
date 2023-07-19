import Button from "@/common/button";
import classes from "./login.module.css";
import Link from "next/link";

export default function Login() {
  const btnStyle = {
    background: "orange",
    border: "none",
    padding: "0.8rem 2rem",
    fontWeight: "500",
  };

  return (
    <section className={classes.container}>
      <form className={classes.message}>
        <h1>Sign In</h1>
        <label>User Name</label>
        <input type="email" placeholder="user name" />
        <label>Password</label>
        <input type="password" placeholder="password" />
        <Button text={"Sign In"} style={btnStyle} />
        <p>
          Want to Create Account? <span><Link href='/signup' style={{textDecoration: 'underline', color: 'orange'}}>Register here</Link></span>
        </p>
      </form>
    </section>
  );
}
