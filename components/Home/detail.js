import classes from "./detail.module.css";
import { TbBulb } from "react-icons/tb";
import { FiSettings } from "react-icons/fi";
import { MdIncompleteCircle } from "react-icons/md";

export default function Detail() {
  return (
    <section className={classes.container}>
      <div className={classes.inner}>
        <TbBulb style={{ width: "100px", height: "100px", color: "orange" }} />
        <div>
          <h1>Discover</h1>
          <p>Explore a wide range of projects</p>
        </div>
      </div>
      <div className={classes.inner}>
        <FiSettings
          style={{ width: "100px", height: "100px", color: "orange" }}
        />
        <div>
          <h1>Service</h1>
          <p>Explore and select the best services for yourself</p>
        </div>
      </div>
      <div className={classes.inner}>
        <MdIncompleteCircle
          style={{ width: "100px", height: "100px", color: "orange" }}
        />
        <div>
          <h1>Complete</h1>
          <p>Get your tasks done efficiently and professionally.</p>
        </div>
      </div>
    </section>
  );
}
