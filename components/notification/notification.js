import classes from "./notification.module.css";
import Wrapper from "../common/Wrapper/Wrapper";
import { GrNotification } from "react-icons/gr";

export default function Notification() {
  return (
    <Wrapper>
      <div className={classes.container}>
        <div className={classes.notification}>
          <h1>All notifications</h1>

          <div className={classes.icons}>
            <GrNotification style={{ fontSize: "3rem" }} />
            <h2>No notification</h2>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
