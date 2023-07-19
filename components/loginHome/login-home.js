import Button from "@/common/button";
import classes from "./login-home.module.css";

export default function LoginHome() {
  const btnStyle = {
    background: "orange",
    border: "none",
    padding: "0.8rem 2rem",
    fontWeight: "500",
  };

  return (
    <section className={classes.container}>
      <h1>Welcome to our Project Service Provider</h1>
      <form className={classes.searchOuter}>
        <label>Search for Projects</label>
        <div className={classes.searchInner}>
          <input type="text" placeholder="Project Title" />
          <Button text={"Search"} style={btnStyle}/>
        </div>
      </form>
      <h2>All Projects</h2>
    </section>
  );
}
