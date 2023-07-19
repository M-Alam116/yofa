import Button from "@/common/button";
import classes from "./signup.module.css";
import Link from "next/link";

export default function SignUp() {
  const btnStyle = {
    background: "orange",
    border: "none",
    padding: "0.8rem 2rem",
    fontWeight: "500",
  };

  return (
    <section className={classes.container}>
      <div className={classes.outer}>
        <h1>Sign Up</h1>
        <form className={classes.message}>
          <div>
            <label>Full Name</label>
            <input type="text" placeholder="full name" />
          </div>
          <div>
            <label>User Name</label>
            <input type="email" placeholder="user name" />
          </div>
          <div>
            <label>Password</label>
            <input type="password" placeholder="password" />
          </div>
          <div>
            <label>Confirm Password</label>
            <input type="password" placeholder="confirm password" />
          </div>
          <Button text={"Sign Up"} style={btnStyle} />
          <p>
            Already have an account?
            <span>
              <Link
                href="/login"
                style={{ textDecoration: "underline", color: "orange" }}
              >
                Login here
              </Link>
            </span>
          </p>
        </form>
      </div>
    </section>
  );
}
