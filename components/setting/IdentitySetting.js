import Button from "../common/Button/button";
import classes from "./identitysetting.module.css";
import { BiEdit } from "react-icons/bi";
export default function IdentitySetting() {
  const saveBtn = {
    background: "#0f6378",
    border: "none",
    padding: "0.8rem 2rem",
    fontWeight: "500",
    borderRadius: "30px",
  };

  return (
    <div className={classes.container}>
      <div className={classes.identity}>
        <div
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
            marginBottom: "1rem",
          }}
        >
          <h2>My picture</h2>
          <BiEdit
            style={{ fontSize: "1.5rem", color: "darkblue", cursor: "pointer" }}
          />
        </div>
        <input
          type="file"
          accept=".jpg, .jpeg, .png, .gif, .bmp, image/jpeg, image/png, image/gif, image/bmp"
          className={classes.profilePicture}
        />

        <hr
          style={{ width: "100%", marginBottom: "2rem", marginTop: "1rem" }}
        ></hr>

        <h2>Identify</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            margin: "1rem 0",
          }}
        >
          <label>First name</label>
          <input type="text" placeholder="First name" />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <label>Last name</label>
          <input type="text" placeholder="Last name" />
        </div>

        <div
          style={{ marginTop: "2rem", display: "flex", justifyContent: "end" }}
        >
          <Button text={"Register"} style={saveBtn} />
        </div>
      </div>

      <div className={classes.generalInfo}>
        <h2>General informations</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "5px", margin: '1rem 0' }}>
          <label>DoB</label>
          <input type="date"/>
        </div> 
        
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <label>Gender</label>
          <select>
            <option>Unspecified</option>
            <option>Women</option>
            <option>Male</option>
            <option>Other</option>
          </select>
        </div>

        <div
          style={{ marginTop: "2rem", display: "flex", justifyContent: "end" }}
        >
          <Button text={"Register"} style={saveBtn} />
        </div>
      </div>
    </div>
  );
}
