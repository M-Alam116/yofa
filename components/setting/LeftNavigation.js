import classes from "./leftNavigation.module.css";
import { MdPermIdentity } from "react-icons/md";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { RiDeleteBin5Line } from "react-icons/ri";

export default function LeftNavigation({ setSelectedOption }) {
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className={classes.container}>
      <div
        className={classes.tabs}
        onClick={() => handleOptionClick("identity")}
      >
        <MdPermIdentity className={classes.icons} />
        <li>Identity</li>
      </div>

      <div className={classes.tabs} onClick={() => handleOptionClick("email")}>
        <AiOutlineMail className={classes.icons} />
        <li>Email</li>
      </div>

      <div
        className={classes.tabs}
        onClick={() => handleOptionClick("password")}
      >
        <AiOutlineLock className={classes.icons} />
        <li>Password</li>
      </div>

      <div className={classes.tabs} onClick={() => handleOptionClick("phone")}>
        <BsTelephone className={classes.icons} />
        <li>Phone</li>
      </div>

      <div
        className={classes.tabs}
        onClick={() => handleOptionClick("deletion")}
      >
        <RiDeleteBin5Line className={classes.icons} />
        <li>Account Deletion</li>
      </div>
    </div>
  );
}
