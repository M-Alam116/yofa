import { useContext } from "react";
import classes from "./sidenav.module.css";
import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import {
  BiSolidUserDetail,
  BiMessageAltDetail,
  BiSolidReport,
} from "react-icons/bi";
import {
  MdOutlineNotifications,
  MdOutlineCreateNewFolder,
  MdOutlineAssignment,
  MdPayment,
} from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { TbDatabaseSearch } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { RiSettings4Line } from "react-icons/ri";
import NavContext from "../common/NavContext";

export default function SideNav() {
  const { isOpen } = useContext(NavContext);

  return (
    <div className={`${classes.container} ${isOpen ? classes.drawer : ""}`}>
      <Link href="/" style={{ textDecoration: "none", color: "black" }}>
        <div className={classes.nav}>
          <AiOutlineHome className={classes.icon} />
          <li>Home</li>
        </div>
      </Link>

      <Link href="/about" style={{ textDecoration: "none", color: "black" }}>
        <div className={classes.nav}>
          <BiSolidUserDetail className={classes.icon} />
          <li>About</li>
        </div>
      </Link>

      <Link href="/message" style={{ textDecoration: "none", color: "black" }}>
        <div className={classes.nav}>
          <BiMessageAltDetail className={classes.icon} />
          <li>Message</li>
        </div>
      </Link>

      <Link
        href="/notification"
        style={{ textDecoration: "none", color: "black" }}
      >
        <div className={classes.nav}>
          <MdOutlineNotifications className={classes.icon} />
          <li>Notification</li>
        </div>
      </Link>

      <Link
        href="/dashboard/client-dashboard"
        style={{ textDecoration: "none", color: "black" }}
      >
        <div className={classes.nav}>
          <RxDashboard className={classes.icon} />
          <li>Client Dashboard</li>
        </div>
      </Link>

      <Link
        href="/dashboard/freelancer-dashboard"
        style={{ textDecoration: "none", color: "black" }}
      >
        <div className={classes.nav}>
          <RxDashboard className={classes.icon} />
          <li>Freelancer Dashboard</li>
        </div>
      </Link>

      <Link
        href="/create-project"
        style={{ textDecoration: "none", color: "black" }}
      >
        <div className={classes.nav}>
          <MdOutlineCreateNewFolder className={classes.icon} />
          <li>Create project</li>
        </div>
      </Link>

      <Link
        href="/manage-project"
        style={{ textDecoration: "none", color: "black" }}
      >
        <div className={classes.nav}>
          <MdOutlineAssignment className={classes.icon} />
          <li>Manage project</li>
        </div>
      </Link>

      <Link
        href="/reporting"
        style={{ textDecoration: "none", color: "black" }}
      >
        <div className={classes.nav}>
          <BiSolidReport className={classes.icon} />
          <li>Reporting</li>
        </div>
      </Link>

      <Link
        href="/tender-page"
        style={{ textDecoration: "none", color: "black" }}
      >
        <div className={classes.nav}>
          <TbDatabaseSearch className={classes.icon} />
          <li>Tender</li>
        </div>
      </Link>

      <Link href="/profile" style={{ textDecoration: "none", color: "black" }}>
        <div className={classes.nav}>
          <CgProfile className={classes.icon} />
          <li>Profile</li>
        </div>
      </Link>

      <Link href="/payment" style={{ textDecoration: "none", color: "black" }}>
        <div className={classes.nav}>
          <MdPayment className={classes.icon} />
          <li>Payment</li>
        </div>
      </Link>

      <Link href="/setting" style={{ textDecoration: "none", color: "black" }}>
        <div className={classes.nav}>
          <RiSettings4Line className={classes.icon} />
          <li>Setting</li>
        </div>
      </Link>
    </div>
  );
}
