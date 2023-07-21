import classes from "./payment.module.css";
import { BsCreditCard2Back, BsPaypal } from "react-icons/bs";
import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { RxCross1 } from "react-icons/rx";

export default function Payment() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "20rem",
    bgcolor: "#0a1029",
    color: "white",
    border: "none",
    boxShadow: 24,
    p: 6,
  };

  return (
    <section className={classes.container}>
      <div>
        <h1>Payment Methods</h1>
        <p>Easily manage your payments methods through our secure system.</p>
      </div>
      <div className={classes.payment} onClick={handleOpen}>
        <div className={classes.credit}>
          <BsCreditCard2Back style={{ fontSize: "1.5rem" }} />
          <h2>Credit Card</h2>
        </div>
        <hr></hr>
        <div className={classes.paypal}>
          <BsPaypal style={{ fontSize: "1.5rem" }} />
          <h2>PayPal</h2>
        </div>
      </div>
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                Add payment method
                <RxCross1
                  onClick={handleClose}
                  style={{
                    fontSize: "1.3rem",
                    cursor: "pointer",
                    position: "absolute",
                    top: "1rem",
                    right: "1rem",
                  }}
                />
              </Typography>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  margin: "1rem 0",
                  fontSize: "1.2rem",
                }}
              >
                <label
                  style={{ display: "flex", gap: "1rem", alignItems: "center" }}
                >
                  <input type="radio" name="paymentMethod" />
                  <span>Credit Card</span>
                </label>
                <label
                  style={{ display: "flex", gap: "1rem", alignItems: "center" }}
                >
                  <input type="radio" name="paymentMethod" />
                  <span>PayPal</span>
                </label>
              </div>
            </Box>
          </Fade>
        </Modal>
      </div>
    </section>
  );
}
