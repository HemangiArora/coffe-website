import React from "react";
import "./Home.css";
import Navbar from "../components/Navbar";
import TextField from "@mui/material/TextField";
import { Grid, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ModalDisplay from "./ModalDisplay";
const SignIn = () => {
  const [open, setOpen] = React.useState(false);
  const [inputData, setInputData] = React.useState({email:'',password:''});
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const formField = [
    {
        label:"Enter name",
        placeholder: "Enter name",
        type: "text",
        name: "name",
        required: true,
        grid: 12,
      },
      {
        label: "Enter email",
        placeholder: "Enter email",
        type: "email",
        name: "email",
        required: true,
        grid: 12,
      },

      {
        label: "Enter contact-number",
        placeholder: "Enter contact-number",
        type: "text",
        name: "contact_num",
        required: true,
        grid: 12,
      },

      {
        //label: "Enter DOB",
        placeholder:"Enter dob",
        //onfocus:"this.placeholder='Enter dob'" ,
        type: "date",
        name: "dob",
        required: true,
        grid: 12,
      },
      
      {
        label: "Enter password",
        placeholder: "Enter password",
        type: "password",
        name: "password",
        required: true,
        grid: 12,
      },
      {
        label: "Enter confirm password",
        placeholder: "Enter confirm password",
        type: "password",
        name: "confi_password",
        required: true,
        grid: 12,
      },

    {
      type: "button",
      name: "submit",
      value: "Sign Up",
      grid: 12,
    },
  ];
  const onChangeInput = (e) => {
        setInputData({...inputData,[e.target.name]:e.target.value});
  };
  
  const onSubmitForm = (e) => {
    e.preventDefault();
    handleOpen();
  };
  return (
    <>
      <Navbar />
      {open && (<ModalDisplay open={open} handleClose={handleClose} modalTitle={"Sign Up Data"}>
        <p>
        You have successfully signed up
        </p>
        {Object.keys(inputData)?.map((Objkey)=>(
          <p>
            {`${Objkey}: ${inputData?.[Objkey]}`}
          </p>
        ))}
        </ModalDisplay>)}
      <div className="sign-in-up">
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Sign Up
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <form onSubmit={onSubmitForm}>
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
                        onChange={onChangeInput}
                        value={inputData?.[properties?.name]}
                        {...properties}
                      />
                    ) : (
                      <Button
                        variant="outlined"
                        size="medium"
                        type={properties?.name}
                      >
                        {properties?.value}
                      </Button>
                    )}
                  </Grid>
                );
              })}
              <Link onClick={onclick} to={"/sign-in"}>
                Already signed up? you can login here!
              </Link>
            </Grid>
          </form>
        </Typography>
      </div>
    </>
  );
};

export default SignIn;
