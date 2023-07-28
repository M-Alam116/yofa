import classes from "./Categorization.module.css";
import Wrapper from "@/components/common/Wrapper/Wrapper";
import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { BsFillPlusCircleFill, BsCurrencyEuro } from "react-icons/bs";
import { AiFillMinusCircle } from "react-icons/ai";
import Button from "@/components/common/Button/button";
import Link from "next/link";
export default function Categorization() {
  const [category, setCategory] = useState("");
  const [count, setCount] = useState(0);

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const handlePlus = () => {
    setCount(count + 20);
  };

  const handleMinus = () => {
    if (count >= 20) {
      setCount(count - 20);
    }
  };

  const previousBtn = {
    background: "transparent",
    borderRadius: "30px",
    border: "2px solid #0f6378",
    color: "#0f6378",
    padding: "10px 30px",
  };

  const nextBtn = {
    background: " #fc5757",
    borderRadius: "30px",
    border: "none",
    color: "#fff",
    padding: "12px 45px",
  };

  return (
    <Wrapper>
      <div className={classes.container}>
        <div className={classes.options}>
          <div className={classes.category}>
            <h2>Your Category</h2>
            <label>Choose the category that best suit your job.</label>
            <Box sx={{ minWidth: 120, marginTop: 2 }}>
              <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select
                  value={category}
                  label="Category"
                  onChange={handleChange}
                >
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
          </div>
          <div className={classes.skills}>
            <h2>Your skills</h2>
            <label>
              Indicate your most relevant skills, tools or deliverables.
            </label>
            <input type="text" placeholder="Front end developer..." required />
          </div>
          <div className={classes.experience}>
            <h2>Your level of experience</h2>
            <div className={classes.expertise}>
              <div className={classes.innerContent}>
                <h3>0-2 years</h3>
                <p>Junior</p>
              </div>
              <div className={classes.innerContent}>
                <h3>3-7 years</h3>
                <p>Intermediate</p>
              </div>
              <div className={classes.innerContent}>
                <h3>8-15 years</h3>
                <p>Senior</p>
              </div>
              <div className={classes.innerContent}>
                <h3>15 years and +</h3>
                <p>Expert</p>
              </div>
            </div>
          </div>
          <div className={classes.dailyRate}>
            <h2>Your daily rate</h2>
            <label>
              Indicate your average daily rate, knowing that a day represents
              approximately 8 hours of work.
            </label>
            <div className={classes.rate}>
              <AiFillMinusCircle
                className={classes.icon}
                onClick={handleMinus}
              />
              <input type="number" value={count} required />
              <BsCurrencyEuro />
              <BsFillPlusCircleFill
                className={classes.icon}
                onClick={handlePlus}
              />
            </div>
          </div>

          <div className={classes.btns}>
            <Link href="/signup/freelancer/headline">
              <Button text={"Previous"} style={previousBtn} />
            </Link>

            <Link href="/signup/freelancer/freelancer">
              <Button text={"Next"} style={nextBtn} />
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
