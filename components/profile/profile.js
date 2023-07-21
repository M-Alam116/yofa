import Button from "@/common/button";
import classes from "./profile.module.css";

export default function Profile() {
  
  const btnStyle = {
    background: "orange",
    border: "none",
    padding: "0.8rem 3rem",
    fontWeight: "500",
    borderRadius: "10px",
  };

  return (
    <section className={classes.container}>
      <div className={classes.userInfo}>
        <input
          type="file"
          id="profilePictureInput"
          accept="image/*"
          className={classes.profilePicture}
        />
        <h2>User Name</h2>
        <input type="text" placeholder="Bio" />
        <div className={classes.userDetail}>
          <h3>Contact Information</h3>
          <div className={classes.infoDetails}>
            <p>From</p>
            <p>USA</p>
          </div>
          <div className={classes.infoDetails}>
            <p>Email</p>
            <p>user@example.com</p>
          </div>
          <div className={classes.infoDetails}>
            <p>Phone</p>
            <p>+123 456 7890</p>
          </div>
        </div>
      </div>

      <div className={classes.extraInfo}>
        <div>
          <h2>Skills</h2>
          <textarea type="text" cols={40} rows={5} placeholder="Skill" />
        </div>
        <div>
          <h2>Experience</h2>
          <textarea type="text" cols={40} rows={5} placeholder="Experience" />
        </div>
        <div>
          <h2>Education</h2>
          <textarea type="text" cols={40} rows={5} placeholder="Education" />
        </div>

        <div className={classes.btns}>
          <Button text={"Save"} style={btnStyle}/>
          <Button text={"Edit profile"} style={btnStyle}/>
        </div>
      </div>
    </section>
  );
}
