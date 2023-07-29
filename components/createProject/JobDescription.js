import classes from "./jobdescription.module.css";
import Wrapper from "../common/Wrapper/Wrapper";
import Button from "../common/Button/button";
import Link from "next/link";

export default function JobDescription() {
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
          <div className={classes.description}>
            <h1>What is the purpose of your mission?</h1>
            <input type="text" placeholder="Web Developer" />

            <h1>Describe the mission</h1>
            <textarea
              cols={50}
              rows={10}
              placeholder="Hello, we are looking for a freelancer.."
            />
          </div>

          <div className={classes.location}>
            <h1>Mission location</h1>
            <div className={classes.selection}>
              <input type="radio" name="options" value="remote" />
              <label>Remote</label>
            </div>
            <div className={classes.selection}>
              <input type="radio" name="options" value="hybrid" />
              <label>Hybrid</label>
            </div>
            <div className={classes.selection}>
              <input type="radio" name="options" value="on_site" />
              <label>On the site</label>
            </div>
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
          <Link href="/create-project/job-skill">
            <Button text={"Previous"} style={previousBtn} />
          </Link>

          <Link href="/create-project">
            <Button text={"Confirm"} style={nextBtn} />
          </Link>
        </div>
      </div>
    </Wrapper>
  );
}
