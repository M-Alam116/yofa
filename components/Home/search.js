import classes from './search.module.css'
import Wrapper from '../common/Wrapper/Wrapper'
import Button from '../common/Button/button'
import {AiOutlineSearch} from 'react-icons/ai'
import {GrLocation} from 'react-icons/gr'
import {BiSolidLockAlt} from 'react-icons/bi'
import {MdVerifiedUser} from 'react-icons/md'

export default function Search() {
    const btnStyle = {
        background: "#fc5757",
        border: "none",
        padding: "0.8rem 3rem",
        fontWeight: "500",
        borderRadius: "30px",
      };

  return (
    <Wrapper>
      <div className={classes.container}>
        <form className={classes.search}>
            <div style={{position: 'relative'}}>
            <AiOutlineSearch className={classes.icon}/>
            <input type='text' placeholder="Skill" required/>
            </div>
            <div style={{position: 'relative'}}>
            <GrLocation className={classes.icon}/>
            <input type='text' placeholder='Location' required/>
            </div>
            <Button text={'Find a Freelancer'} style={btnStyle}/>
        </form>

        <div className={classes.features}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <BiSolidLockAlt className={classes.featureIcons}/>
                <p>Secure payments</p>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <MdVerifiedUser className={classes.featureIcons}/>
                <p>Legal documents verified</p>
            </div>
        </div>
      </div>
    </Wrapper>
  )
}
