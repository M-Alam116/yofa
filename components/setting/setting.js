import Button from "@/common/button";
import classes from "./setting.module.css";

export default function Setting() {
  const btnStyle = {
    background: "orange",
    border: "none",
    padding: "0.8rem 2rem",
    fontWeight: "500",
    width: "100%",
    marginTop: "1rem",
  };

  return (
    <section className={classes.container}>
      <h1>Setting</h1>
      <div className={classes.innerContainer}>
        <div className={classes.personalInfo}>
          <h2>Change Name and Email</h2>
          <div className={classes.name}>
            <label>Full Name</label>
            <input type="text" placeholder="Full Name" />
          </div>
          <div className={classes.email}>
            <label>Email</label>
            <input type="email" placeholder="Email" />
          </div>
          <Button text={"Save Changes"} style={btnStyle} />
        </div>
        <div className={classes.securityInfo}>
          <h2>Change password</h2>
          <div className={classes.password}>
            <label>Current Password</label>
            <input type="password" placeholder="Current password" />
          </div>
          <div className={classes.password}>
            <label>New Password</label>
            <input type="password" placeholder="New password" />
          </div>{" "}
          <div className={classes.password}>
            <label>Confirm Password</label>
            <input type="password" placeholder="Confirm password" />
          </div>
          <Button text={"Save Changes"} style={btnStyle} />
        </div>
      </div>
    </section>
  );
}
