import Button from "../common/Button/button";
import Wrapper from "../common/Wrapper/Wrapper";
import classes from "./profile.module.css";
import { BsFillCameraFill } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Rating from "@mui/material/Rating";

export default function Profile() {
  const [category, setCategory] = useState("");
  const [value, setValue] = useState(2);

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const saveBtn = {
    background: "#fc5757",
    border: "none",
    padding: "0.8rem 3rem",
    fontWeight: "500",
  };

  return (
    <Wrapper>
      <section className={classes.container}>
        <div className={classes.basicInfo}>
          <div style={{ position: "relative" }}>
            <BsFillCameraFill className={classes.picIcon} />
            <input type="file" className={classes.profilePicture} />
          </div>
          <div className={classes.user}>
            <h1>User Name</h1>
            <h2>Web Developer</h2>
            <div className={classes.details}>
              <div className={classes.price}>
                <p>Price</p>
                <h3>150 € / day</h3>
              </div>
              <div className={classes.experience}>
                <p>Experience</p>
                <h3>0-2 years</h3>
              </div>
            </div>
          </div>
        </div>

        <div className={classes.location}>
          <h1>Location</h1>
          <div style={{ display: "flex", gap: "5px" }}>
            <GrLocation style={{ fontSize: "1.5rem", color: "lightblue" }} />
            <p>USA</p>
          </div>
        </div>

        <div className={classes.expertise}>
          <h1>Expertise</h1>
          <h2>Activity Area</h2>
          <Box sx={{ minWidth: 120, marginTop: 2 }}>
            <FormControl fullWidth>
              <InputLabel>Category</InputLabel>
              <Select value={category} label="Category" onChange={handleChange}>
                <MenuItem value={1}>Computer and Technology</MenuItem>
                <MenuItem value={2}>Design and Graphic Creation</MenuItem>
                <MenuItem value={3}>Writing and Translation</MenuItem>
                <MenuItem value={4}>Marketing and Advertising</MenuItem>
                <MenuItem value={5}>Personal Services</MenuItem>
                <MenuItem value={6}>Web Development</MenuItem>
                <MenuItem value={7}>Professional Services</MenuItem>
                <MenuItem value={8}>Education and Training</MenuItem>
                <MenuItem value={9}>
                  Social Media and Community Management
                </MenuItem>
                <MenuItem value={10}>Health and Well-being</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <h2>Skills</h2>
          <div className={classes.skills}>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React js</span>
            <span>Next js</span>
            <span>Node js</span>
          </div>
        </div>

        <div className={classes.language}>
          <h1>Languages</h1>
          <h2>English</h2>
          <p>Fluent</p>
        </div>

        <div className={classes.about}>
          <h1>About</h1>
          <p>
            Mobile developer for more than 6 years, geek and entrepreneur, I
            have created numerous iOS and Android mobile applications for
            startups and worked for large groups (Air France, Voyages SNCF,
            etc.). My field of expertise includes: server administration,
            back-end development (php/mysql, node.js...), notification
            management. I also have mobile UX/UI expertise to support you on
            these themes, etc..
          </p>
        </div>

        <div className={classes.review}>
          <h1>Reviews</h1>
          <div style={{display: 'flex', flexWrap: 'wrap', gap: '1rem'}}>
            <Box
              sx={{
                "& > legend": { mt: 2 },
              }}
            >
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </Box>
            <p>(0 reviews)</p>
          </div>
        </div>

        <div className={classes.Experiences}>
          <h1>Experiences</h1>
          <div>
            <h2>Google</h2>
            <h3>Web Developer</h3>
            <h4>2020 - 2023</h4>
            <p>
              Me, if I had to sum up my life today with you, I would say that it
              is first of all encounters. People who reached out to me, maybe at
              a time when I couldn't, when I was home alone.
            </p>
          </div>
        </div>

        <Button text={"Save"} style={saveBtn}/>
      </section>
    </Wrapper>
  );
}
