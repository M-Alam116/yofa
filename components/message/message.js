
import Button from "@/common/button";
import classes from "./message.module.css";

export default function Message() {
  const btnStyle = {
    background: "orange",
    border: "none",
    padding: "0.8rem 3rem",
    fontWeight: "500",
  };

  return (
    <section className={classes.container}>
      <form className={classes.message}>
        <label>Send a Private Message</label>
        <textarea
          placeholder="Enter your message"
          cols={30}
          rows={8}
          className={classes.mesg}
        />
        <Button text={"Send"} style={btnStyle} />
      </form>
    </section>
  );
}
