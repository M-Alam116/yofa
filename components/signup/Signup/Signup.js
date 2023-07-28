import Wrapper from "@/components/common/Wrapper/Wrapper";
import Classes from "./signup.module.css";
import Button from "@/components/common/Button/button";
import { BsPersonWorkspace } from "react-icons/bs";
import { MdEmojiPeople, MdOutlineArrowRight } from "react-icons/md";
import Link from "next/link";

export default function Signup() {
  const loginBtn = {
    background: "transparent",
    borderRadius: "30px",
    border: "2px solid #0f6378",
    color: "#0f6378",
    padding: "10px 40px",
  };

  return (
    <Wrapper>
      <div className={Classes.container}>
        <Link href="/login">
          <Button text={"Log In"} style={loginBtn} />
        </Link>
        <div>
          <h1>What is your Role ?</h1>
          <Link
            href="/signup/client"
            style={{ textDecoration: "none", color: "black" }}
          >
            <div className={Classes.options}>
              <MdEmojiPeople className={Classes.leftIcon} />
              <div>
                <h2>Customer</h2>
                <p>I am looking for freelancers</p>
              </div>
              <MdOutlineArrowRight className={Classes.rightIcon} />
            </div>
          </Link>

          <Link
            href="/signup/freelancer/headline"
            style={{ textDecoration: "none", color: "black" }}
          >
            <div className={Classes.options}>
              <BsPersonWorkspace className={Classes.leftIcon} />
              <div>
                <h2>Freelancer</h2>
                <p>I am looking for jobs</p>
              </div>
              <MdOutlineArrowRight className={Classes.rightIcon} />
            </div>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
}
