import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import classes from "./category.module.css";

function CustomTabPanel({ children, value, index }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const CustomTab = styled(Tab)(({ theme }) => ({
  color: "white",
  fontWeight: 500,
  fontSize: "16px",
  "&.Mui-selected": {
    color: "orange",
  },
}));

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Category() {
  const [value, setValue] = useState(0);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section className={classes.container}>
      <h1>Category</h1>
      {hydrated && (
        <Box sx={{ width: "100%" }}>
          <Box className={classes.categories}>
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              allowScrollButtonsMobile
            >
              <CustomTab label="Data, IT & Tech" {...a11yProps(0)} />
              <CustomTab label="Marketing & Communication" {...a11yProps(1)} />
              <CustomTab label="Strategies & Business" {...a11yProps(2)} />
              <CustomTab label="Designers, Son & Image" {...a11yProps(3)} />
              <CustomTab
                label="Gestion Projects & Coaching"
                {...a11yProps(4)}
              />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            {/* Render options for Data, IT and Tech category */}
            <div className={classes.category}>
              <Typography className={classes.item}>Cloud Engineer</Typography>
              <Typography className={classes.item}>Data Analysts</Typography>
              <Typography className={classes.item}>
                Experts Cyber Security
              </Typography>
              <Typography className={classes.item}>
                Backend Developers
              </Typography>
              <Typography className={classes.item}>
                Frontend Developers
              </Typography>
              <Typography className={classes.item}>Data Scientists</Typography>
              <Typography className={classes.item}>
                Software Engineers
              </Typography>
              <Typography className={classes.item}>DevOps</Typography>
              <Typography className={classes.item}>
                Mobile Developers
              </Typography>
              <Typography className={classes.item}>
                Administrateurs Systems and Research
              </Typography>
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            {/* Render options for Marketing and Communication category */}
            <div className={classes.category}>
              <Typography className={classes.item}>Coming soon</Typography>
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            {/* Render options for Strategies and Business category */}
            <div className={classes.category}>
              <Typography className={classes.item}>Coming soon</Typography>
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={3}>
            {/* Render options for Designers, Son, and Image category */}
            <div className={classes.category}>
              <Typography className={classes.item}>Coming soon</Typography>
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={4}>
            {/* Render options for Gestion de projet and Coaching category */}
            <div className={classes.category}>
              <Typography className={classes.item}>Coming soon</Typography>
            </div>
          </CustomTabPanel>
        </Box>
      )}
    </section>
  );
}
