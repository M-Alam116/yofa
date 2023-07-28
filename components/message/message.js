import Wrapper from "../common/Wrapper/Wrapper";
import Button from "../common/Button/button";
import classes from "./message.module.css";
import { BiDownArrow, BiMessageAltDetail } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";

export default function Message() {
  const btnStyle = {
    background: "#fc5757",
    border: "none",
    padding: "0.8rem 3rem",
    fontWeight: "500",
  };

  return (
    <Wrapper>
      <section className={classes.container}>
        <div className={classes.left}>
          <div className={classes.conversation}>
            <h1>Conversations</h1>
            <div
              style={{
                display: "flex",
                gap: "5px",
                alignItems: "center",
                fontSize: "18px",
                background: "#035266",
                color: "white",
                padding: "5px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Active <BiDownArrow />
            </div>

            <div className={classes.dropdown}>
              <div style={{ display: "flex", gap: "5px" }}>
                <input type="checkbox" id="myCheckbox1"></input>
                <label for="myCheckbox1">Active</label>
              </div>

              <div style={{ display: "flex", gap: "5px", margin: "1rem 0" }}>
                <input type="checkbox" id="myCheckbox2"></input>
                <label for="myCheckbox2">Archived</label>
              </div>

              <div style={{ display: "flex", gap: "5px" }}>
                <input type="checkbox" id="myCheckbox3"></input>
                <label for="myCheckbox3">Unread</label>
              </div>
            </div>
          </div>

          <BsPeople style={{ fontSize: "3rem" }} />
          <h2>No results were found for your search</h2>
        </div>

        <div className={classes.right}>
          <div style={{textAlign: 'center'}}>
              <BiMessageAltDetail style={{ fontSize: "3rem"}}/>
              <h1>Welcome to Yofa Messaging!</h1>
          </div>

          <form className={classes.message}>
            <textarea cols={50} rows={3}></textarea>
            <Button text={"Send"} style={btnStyle}/>
          </form>
        </div>
      </section>
    </Wrapper>
  );
}
