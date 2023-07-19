import Button from "@/common/button";
import classes from "./create.module.css";

export default function CreateProject() {
  const btnStyle = {
    background: "orange",
    border: "none",
    padding: "0.8rem 2rem",
    fontWeight: "500",
  };

  return (
    <section className={classes.container}>
      <form className={classes.message}>
        <h1>Project Information</h1>
        <label>Project Title:</label>
        <input type="text" placeholder="title"/>
        <label>Project Description:</label>
        <textarea
          placeholder="Description"
          cols={30}
          rows={8}
          className={classes.mesg}
        />
        <Button text={"Create"} style={btnStyle} />
      </form>
    </section>
  );
}
