import React, { useRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./index.css";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import { Grid, Button } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ open, handleClose }) {
  const formData = useRef();
  const formField = [
    {
      placeholder: "Full name",
      minLength: 2,
      type: "text",
      name: "fullname",
      required: true,
      grid: 6,
    },
    {
      placeholder: "Phone number",
      maxLength: 10,
      type: "number",
      name: "phone",
      required: true,
      grid: 6,
    },
    {
      placeholder: "Email",
      type: "email",
      name: "email",
      required: true,
      grid: 6,
    },
    {
      placeholder: "Product",
      type: "text",
      name: "product",
      required: false,
      grid: 6,
    },
    {
      type: "button",
      name: "submit",
      value: "Submit",
      grid: 12,
    },
  ];
  const onSubmit = (event) => {
    //Disable default action of form submit button 
    event.preventDefault();

    //Accessing form reference with formData variable.
    //Object destructuring to get form fields with their name.
    const { fullname, email, phone, product } = formData.current;

    // console.log(displayData)
    const container = document.querySelector("#modal-data");
    container.append(
      `Name : ${fullname.value}, Email : ${email.value}, Phone : ${phone.value}, Product : ${product.value}`
    );
    // displayData.current.innerHTML=`Name : ${fullname.value}, Email : ${email.value}`;
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Contact Form
            <CloseIcon onClick={handleClose} />
          </Typography>
          <Typography id="modal-data" variant="h6" component="h2"></Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <form ref={formData} onSubmit={onSubmit}>
              <Grid container>
                {formField?.map((properties) => {
                  return (
                    <Grid
                      xs={
                        properties?.grid === 6
                          ? properties?.grid * 2
                          : properties?.grid
                      }
                      lg={properties?.grid}
                      className="pad20px"
                    >
                      {properties?.type !== "button" ? (
                        <TextField
                          id="outlined-basic"
                          variant="outlined"
                          size="medium"
                          {...properties}
                        />
                      ) : (
                        <Button
                          variant="outlined"
                          size="medium"
                          type={properties?.value}
                        >
                          {properties?.value}
                        </Button>
                      )}
                    </Grid>
                  );
                })}
              </Grid>
            </form>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
