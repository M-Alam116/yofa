import classes from './deletionsetting.module.css'
import {RiDeleteBin6Line} from 'react-icons/ri'

export default function DeletionSetting() {
  return (
    <div className={classes.container}>
      <RiDeleteBin6Line style={{fontSize: '1.5rem'}}/>
      <p>Delete my account</p>
    </div>
  )
}
