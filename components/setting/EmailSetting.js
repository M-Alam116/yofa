import classes from './emailsetting.module.css'
import Button from '../common/Button/button'

export default function EmailSetting() {
  const saveBtn = {
    background: "#0f6378",
    border: "none",
    padding: "0.8rem 2rem",
    fontWeight: "500",
    borderRadius: "30px",
  };

  return (
    <div className={classes.container}>
     <h2>E-mail</h2>
      
      <label>Email</label>
      <input type='email' placeholder='Email'/>
      <label>Password</label>
      <input type='password' placeholder='Password'/>

        <div
          style={{ marginTop: "2rem", display: "flex", justifyContent: "end" }}
        >
          <Button text={"Register"} style={saveBtn} />
        </div>
    </div>
  )
}
