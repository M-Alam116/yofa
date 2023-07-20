import Button from "@/common/button";
import classes from "./category.module.css";
import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Category() {
  const [category, setCategory] = React.useState("");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const btnStyle = {
    background: "orange",
    border: "none",
    padding: "0.8rem 3rem",
    fontWeight: "500",
    borderRadius: "10px",
  };

  return (
    <section className={classes.container}>
      <h1>Create a Mission</h1>
      <form className={classes.content}>
        <div className={classes.fields}>
          <label for="missionTitle">Title</label>
          <input
            type="text"
            placeholder="Title"
            className={classes.input}
            required
          />
        </div>

        <div className={classes.fields}>
          <label for="missionCategory">Category</label>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="select-category"  style={{color: 'gray'}}>
                Select Category
              </InputLabel>
              <Select
                labelId="select-label"
                id="select"
                value={category}
                label="Select Category"
                onChange={handleChange}
                sx={{
                  "& .MuiSelect-outlined": {
                    background: "#0a1029",
                    color: "white",
                  },
                }}
              >
                <MenuItem value={1} >Computer and Technology</MenuItem>
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

        <div className={classes.fields}>
          <label for="requiredSkills">Required Skills</label>
          <input
            type="text"
            placeholder="Required Skills"
            className={classes.input}
            required
          />
        </div>

        <div className={classes.fields}>
          <label for="estimatedDuration">Estimated Duration</label>
          <input
            type="text"
            placeholder="Estimated Duration"
            className={classes.input}
            required
          />
        </div>

        <div className={classes.fields}>
          <label for="proposedCompensation">Proposed Compensation</label>
          <input
            type="text"
            placeholder="Proposed Compensation"
            className={classes.input}
            required
          />
        </div>

        <div className={classes.fields}>
          <label for="location">Location (optional)</label>
          <input type="text" placeholder="Location" className={classes.input} />
        </div>

        <div className={classes.fields}>
          <label for="attachments">Attachments (optional)</label>
          <input
            type="file"
            placeholder="Attachments"
            className={classes.input}
          />
        </div>

        <div className={classes.fields}>
          <label for="deadline">Deadline (optional)</label>
          <input type="text" placeholder="Deadline" className={classes.input} />
        </div>

        <div className={classes.fields}>
          <label for="missionDescription">Description:</label>
          <textarea
            id="missionDescription"
            name="missionDescription"
            placeholder="Description"
            cols={40}
            rows={10}
            required
            className={classes.input}
          ></textarea>
        </div>

        <div className={classes.fields}>
          <label for="deaspecialConditionsdline">Special Conditions</label>
          <input
            type="text"
            placeholder="Special Conditions"
            className={classes.input}
          />
        </div>

        <Button text={"Submit"} style={btnStyle} />
      </form>
    </section>
  );
}
