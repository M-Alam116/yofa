import classes from "./manageproject.module.css";
import Wrapper from "../common/Wrapper/Wrapper";
import Button from "../common/Button/button";
import { MdAssignmentAdd } from "react-icons/md";

export default function ManageProject() {
  const styleBtn = {
    background: " #fc5757",
    borderRadius: "30px",
    border: "none",
    color: "#fff",
    padding: "12px 35px",
  };

  return (
    <Wrapper>
      <div className={classes.container}>
        <h1>Manage the Projects</h1>

        <div className={classes.project}>
          <MdAssignmentAdd style={{ fontSize: "8rem" }} />
          <h2>No project in progress</h2>
          <Button text={"Publish a Project"} style={styleBtn} />
        </div>
      </div>
    </Wrapper>
  );
}
