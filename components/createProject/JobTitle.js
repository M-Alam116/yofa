import Button from "../common/Button/button";
import Wrapper from "../common/Wrapper/Wrapper";
import classes from "./jobtitle.module.css";
import Link from "next/link";
export default function JobTitle() {
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
        <div className={classes.job}>
          <h1>Which freelancer are you looking for?</h1>
          <h3>Job title</h3>
          <p>Make sure you complete it</p>

          <input type="text" placeholder='Ex: Web Developer"' />

          <h3 style={{margin: '1rem 0'}}>With a level</h3>
          <select>
            <option>Expert (8 years and +)</option>
            <option>Intermediate (3 - 7 years)</option>
            <option>Junior (0 -2 years)</option>
          </select>

          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "space-between",
              marginTop: "3rem",
            }}
          >
            <Link href="/create-project">
              <Button text={"Previous"} style={previousBtn} />
            </Link>

            <Link href="/create-project/job-skill">
              <Button text={"Next"} style={nextBtn} />
            </Link>
          </div>
        </div>
        <div className={classes.info}>
          <h1>Information</h1>
          <p>
            Did you know ? A well-detailed search has a 95% chance of getting
            responses from interested freelancers in less than 24 hours.
          </p>
        </div>
      </div>
    </Wrapper>
  );
}
