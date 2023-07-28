import Button from "../../common/Button/button";
import classes from "./signupForClient.module.css";
import Link from "next/link";
import Image from "next/image";
import Wrapper from "../../common/Wrapper/Wrapper";
import { FcGoogle } from "react-icons/fc";

export default function SignUpForClient() {
  const loginBtn = {
    background: "transparent",
    borderRadius: "30px",
    border: "2px solid #0f6378",
    color: "#0f6378",
    padding: "10px 30px",
  };

  const registerBtn = {
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
            <h1>Register</h1>
            <Link href="/login">
              <Button text={"Log In"} style={loginBtn} />
            </Link>
          </div>
          <div className={classes.social}>
            <FcGoogle className={classes.socialIcons}/>
            <h3>Registration with Google</h3>
          </div>
  
          <form className={classes.message}>
            <label>First Name</label>
            <input type="text" placeholder="First Name" required/>
            <label>Last Name</label>
            <input type="text" placeholder="Last Name" required/>
            <label>Email</label>
            <input type="email" placeholder="Email" required/>
            <label>Password</label>
            <input type="password" placeholder="Password" required/>
            
            <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '2rem'}}>
            <Link href='/signup' style={{textDecoration: 'none', fontSize: '16px'}}>Previous</Link>
            <Button text={"Register"} style={registerBtn} />
            </div>
          </form>
        </div>

        <div className={classes.rightvector}>
          <Image
            src="/images/signup.png"
            width={600}
            height={500}
            alt="register"
            className={classes.image}
          />
        </div>
      </div>
    </Wrapper>
  );
}
