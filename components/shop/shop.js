import Button from "../common/Button/button";
import classes from "./shop.module.css";
export default function Shop() {
  const btnStyle = {
    background: "orange",
    border: "none",
    padding: "0.8rem 2.3rem",
    fontWeight: "500",
    borderRadius: "8px",
  };

  return (
    <section className={classes.container}>
      <h1>Token Shop</h1>
      <h2>Price: $1 per token</h2>
      <form className={classes.token}>
        <label>Number of Tokens</label>
        <input type="number" required />
        <Button text={"Buy Token"} style={btnStyle}/>
      </form>
    </section>
  );
}
