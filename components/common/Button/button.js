import classes from './button.module.css'
export default function Button(props) {
  const { text, style} = props;

  return <button className={classes.btn} style={style}>{text}</button>;
}
