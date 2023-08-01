import classes from "./reporting.module.css";
import Wrapper from "../common/Wrapper/Wrapper";
import ExpensesGraph from "./expenses";
import CompletedGraph from "./completedGraph";

export default function Reporting() {
  return (
    <Wrapper>
      <div className={classes.container}>
        <h1>Reports from my team</h1>

        <div className={classes.info}>
          <div className={classes.details}>
            <h2>0 missions completed</h2>
            <p>(last 12 months)</p>
          </div>
          <div className={classes.details}>
            <h2>€0.00 excl. tax spent</h2>
            <p>(last 12 months)</p>
          </div>
          <div className={classes.details}>
            <h2>1 collaborators</h2>
            <button>Invite collaborators</button>
          </div>
        </div>

        <div className={classes.expenses}>
          <h1>Details of the number of missions completed <span>(last 12 months)</span></h1>
          <CompletedGraph />
        </div>

        <div className={classes.expenses}>
          <h1>Detail of expenses <span>(last 12 months)</span></h1>
          <ExpensesGraph />
        </div>
        
      </div>
    </Wrapper>
  );
}
