import Wrapper from "../common/Wrapper/Wrapper";
import classes from "./jobskill.module.css";
import Link from "next/link";
import Button from "../common/Button/button";

export default function JobSkill() {
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
        <div className={classes.inner}>

        <div className={classes.skill}>
          <h1>What skills are required for this project?</h1>
          <input type="text" placeholder="Add skill" />

          <h2>Languages spoken - Optional</h2>
          <input type="text" placeholder="Add language" />
        </div>

        <div className={classes.budget}>
            <h1>What is the planned duration and budget?</h1>
            <h2>I estimate the duration of the mission at</h2>
            <select>
                <option>More than a month</option>
                <option>Less than a month</option>
            </select>
            <h2>With an expected start date of</h2>
            <input type="date"/>
            <h2>Desired number of days per week</h2>
            <select>
                <option>5 days a week</option>
                <option>4 days a week</option>
                <option>3 days a week</option>
                <option>2 days a week</option>
                <option>1 day a week</option>
            </select>
        </div>
        </div>

        <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "space-between",
              marginTop: "3rem",
            }}
          >
            <Link href="/create-project/job-title">
              <Button text={"Previous"} style={previousBtn} />
            </Link>

            <Link href="/create-project/job-description">
              <Button text={"Next"} style={nextBtn} />
            </Link>
          </div>
      </div>
    </Wrapper>
  );
}
