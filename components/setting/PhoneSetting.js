import classes from './phonesetting.module.css'
import Button from '../common/Button/button';

export default function PhoneSetting() {
  const saveBtn = {
    background: "#0f6378",
    border: "none",
    padding: "0.8rem 2rem",
    fontWeight: "500",
    borderRadius: "30px",
  };

  return (
    <div className={classes.container}>
     <h2>Phone</h2>
      
      <label>Phone</label>
      <input type='text' placeholder='Phone'/>

        <div
          style={{ marginTop: "2rem", display: "flex", justifyContent: "end" }}
        >
          <Button text={"Register"} style={saveBtn} />
        </div>
    </div>
  )
}
