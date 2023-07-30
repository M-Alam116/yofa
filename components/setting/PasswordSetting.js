import classes from './passwordsetting.module.css'
import Button from '../common/Button/button';
export default function PasswordSetting() {
  const saveBtn = {
    background: "#0f6378",
    border: "none",
    padding: "0.8rem 2rem",
    fontWeight: "500",
    borderRadius: "30px",
  };

  return (
    <div className={classes.container}>
     <h2>Password</h2>
      
      <input type='password' placeholder='Old password'/>
      <input type='password' placeholder='New password'/>
      <input type='password' placeholder='Confirm password'/>

        <div
          style={{ marginTop: "2rem", display: "flex", justifyContent: "end" }}
        >
          <Button text={"Register"} style={saveBtn} />
        </div>
    </div>
  )
}
