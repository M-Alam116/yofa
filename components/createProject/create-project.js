import Button from "../common/Button/button";
import Wrapper from "../common/Wrapper/Wrapper";
import classes from "./create.module.css";
import Link from "next/link";
export default function CreateProject() {
  const btnStyle = {
    width: "fit-content",
    padding: "10px 20px",
    borderRadius: "30px",
    background: "#fc5757",
    fontSize: "16px",
  };

  return (
    <Wrapper>
      <div className={classes.container}>
        <div className={classes.top}>
          <h1>Track applications</h1>

          <Link href="/create-project/job-title">
            <Button text={"Submit a new project"} style={btnStyle} />
          </Link>
        </div>

        <h6>How does it work?</h6>
        <div className={classes.process}>
          <div className={classes.process1}>
            <div className={classes.count}>1</div>
            <h2>Describe your mission</h2>
            <p>
              Detail your search criteria and the content of the mission. A few
              steps, it's quick and easy.
            </p>
          </div>
          <div className={classes.process2}>
            <div className={classes.count}>2</div>
            <h2>Let us do</h2>
            <p>
              Our matching algorithm contacts a selection of the best
              freelancers for your project.
            </p>
          </div>
          <div className={classes.process3}>
            <div className={classes.count}>3</div>
            <h2>Receive freelancers</h2>
            <p>
              Receive responses from available freelancers interested in your
              assignment within a few hours.
            </p>
          </div>
        </div>

        <div className={classes.bottom}>
          <div className={classes.heading}>
            <h2>MISSION TITLE</h2>
            <h2>STATUS</h2>
            <h2>RESPONSIBLE</h2>
            <h2>CANDIDATES</h2>
            <h2>MISSION LOCATION</h2>
            <h2>CREATION DATE</h2>
          </div>
          <hr style={{ marginTop: "10px", color: "lightgray" }}></hr>

          <p>No project has yet been submitted.</p>
        </div>
      </div>
    </Wrapper>
  );
}
