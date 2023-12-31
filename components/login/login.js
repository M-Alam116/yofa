import Button from "../common/Button/button";
import classes from "./login.module.css";
import Link from "next/link";
import Image from "next/image";
import Wrapper from "../common/Wrapper/Wrapper";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";

export default function Login() {
  const registerBtn = {
    background: "transparent",
    borderRadius: "30px",
    border: "2px solid #0f6378",
    color: "#0f6378",
    padding: "10px 30px",
  };

  const loginBtn = {
    background: " #fc5757",
    borderRadius: "30px",
    border: "none",
    color: "#fff",
    padding: "12px 35px",
  };

  return (
    <Wrapper>
      <div className={classes.container}>
        <div className={classes.leftForm}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "1rem",
            }}
          >
            <h1>Log In</h1>
            <Link href="/signup">
            <Button text={"Register"} style={registerBtn} />
            </Link>
          </div>
          <div className={classes.social}>
            <FcGoogle className={classes.socialIcons}/>
            <h3>Login with Google</h3>
          </div>
          <div className={classes.social}>
            <BsFacebook className={classes.socialIcons}/>
            <h3>Login with Facebook</h3>
          </div>
          <form className={classes.message}>
            <label>Email</label>
            <input type="email" placeholder="Email" required/>
            <label>Password</label>
            <input type="password" placeholder="Password" required/>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "1rem",
              }}
            >
              <p>Forgot password</p>
              <Button text={"Log In"} style={loginBtn} />
            </div>
          </form>
        </div>

        <div className={classes.rightvector}>
          <Image
            src="/images/login.png"
            width={600}
            height={500}
            alt="log in"
            className={classes.image}
          />
        </div>
      </div>
    </Wrapper>
  );
}
