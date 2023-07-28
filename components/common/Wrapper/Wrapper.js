import classes from './Wrapper.module.css'

const Wrapper = ({children}) => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

export default Wrapper;


