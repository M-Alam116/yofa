import classes from "./customerDashboard.module.css";
import Wrapper from "@/components/common/Wrapper/Wrapper";
import { BsSearch } from "react-icons/bs";

export default function CustomerDashboard() {
  return (
    <Wrapper>
      <div className={classes.container}>
        <div className={classes.projects}>
          <h1>Projects in progress</h1>
          <div className={classes.search}>
            <input type="text" placeholder="Search for Projects" />
            <button>
              {" "}
              <BsSearch />{" "}
            </button>
          </div>
          <div className={classes.projectHeading}>
            <h2>Project Title</h2>
            <h2>Category</h2>
            <h2>Submission Date</h2>
            <h2>Project Status </h2>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              margin: "5rem 0",
            }}
          >
            <BsSearch
              style={{ width: "50px", height: "50px", marginBottom: "1rem" }}
            />
            <p>No projects to display</p>
          </div>
        </div>

        <div className={classes.payments}>
          <h1>Payment History</h1>
          <div className={classes.search}>
            <input type="text" placeholder="Search for payment" />
            <button>
              <BsSearch />
            </button>
          </div>
          <div className={classes.paymentHeading}>
            <h2>Project Title</h2>
            <h2>Date</h2>
            <h2>Amount</h2>
            <h2>Payment status</h2>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              margin: "5rem 0",
            }}
          >
            <BsSearch
              style={{ width: "50px", height: "50px", marginBottom: "1rem" }}
            />
            <p>No payments to display</p>
          </div>
        </div>

        <div className={classes.invoices}>
        <h1>Invoices</h1>
          <div className={classes.search}>
            <input type="text" placeholder="Search for invoices" />
            <button>
              <BsSearch />
            </button>
          </div>
          <div className={classes.invoiceHeading}>
            <h2>Project Title</h2>
            <h2>Services</h2>
            <h2>Amount</h2>
            <h2>Taxes</h2>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              margin: "5rem 0",
            }}
          >
            <BsSearch
              style={{ width: "50px", height: "50px", marginBottom: "1rem" }}
            />
            <p>No invoices to display</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
