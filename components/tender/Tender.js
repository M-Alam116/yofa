import classes from './tender.module.css'
import Wrapper from "../common/Wrapper/Wrapper";
import Button from "../common/Button/button";
import { MdAssignmentAdd } from "react-icons/md";

export default function Tender() {
  const styleBtn = {
    background: " #fc5757",
    borderRadius: "30px",
    border: "none",
    color: "#fff",
    padding: "10px 30px",
  };

  return (
    <Wrapper>
      <div className={classes.container}>
        <div className={classes.search}>
        <h1>Find your Projects</h1>
            <div className={classes.searchBtn}>
                <input type='text' placeholder='Find projects'/>
                <Button text={"Search"} style={styleBtn}/>
            </div>
        </div>

        <div className={classes.project}>
          <MdAssignmentAdd style={{ fontSize: "8rem" }} />
          <h2>No available projects</h2>
        </div>
      </div>
    </Wrapper>
  );
}
