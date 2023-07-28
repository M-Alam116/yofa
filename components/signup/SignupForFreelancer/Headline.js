import classes from "./Headline.module.css";
import Wrapper from "@/components/common/Wrapper/Wrapper";
import Button from "@/components/common/Button/button";
import Link from "next/link";
export default function Headline() {
  const previousBtn = {
    background: "transparent",
    borderRadius: "30px",
    border: "2px solid #0f6378",
    color: "#0f6378",
    padding: "10px 30px",
  };

  const nextBtn = {
    background: " #fc5757",
    borderRadius: "30px",
    border: "none",
    color: "#fff",
    padding: "12px 45px",
  };

  return (
    <Wrapper>
      <div className={classes.container}>
        <h1>Welcome among us !</h1>
        <div className={classes.content}>
          <label>what your job is.</label>
          <input
            type="text"
            placeholder="Fullstack Developer, Designer..."
            required
          />
          <div className={classes.btns}>
            <Link href="/signup">
              <Button text={"Previous"} style={previousBtn} />
            </Link>

            <Link href="/signup/freelancer/categorization">
            <Button text={"Next"} style={nextBtn} />
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
