import React from "react";
import Button from "@mui/material/Button";
import { makeStyles } from "@material-ui/core/styles";
import { IoIosArrowForward } from "react-icons/io";
import { MdContactMail } from "react-icons/md";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { MdContactPhone } from "react-icons/md";
import { Icon } from "@iconify/react";
import { useFormik } from "formik";
import * as Yup from "yup";

const useStyle = makeStyles((theme) => ({
  EditMainDiv: {
    width: "22rem",
    // height: "25rem",
    marginLeft: "1rem",
    marginTop: "1rem",
    marginBottom: "1rem",
    borderRadius: "10px",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "2.5rem",
    paddingBottom: "4.7rem",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  DialogContentTitle: {
    color: "#738097",
    fontSize: "1.1rem",
    fontFamily: "Roboto",
    marginBottom: "25px",
    fontWeight: "500",
  },
  inputField: {
    fontSize: "1rem",
    paddingLeft: "0.8rem",
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
    border: "0",
    outline: "0",
    "&:focus": {
      outline: "none",
    },
  },

  infoIcon: {
    color: "#96A9B2",
    fontSize: "1.1rem",
  },
  formInput: {
    display: "flex",
    alignItems: "center",
    width: "70%",
    border: "1px solid white",
    boxShadow: "4px 4px 25px rgba(0, 0, 0, 0.15)",
    paddingLeft: "0.5rem",
  },
  formInputDisable: {
    display: "flex",
    alignItems: "center",
    width: "70%",
    border: "1px solid white",

    paddingLeft: "0.5rem",
    background: "#f2f2f2",
  },
}));

const EditProfile = ({ profileDataFromDB, updateOnDb }) => {
  const classes = useStyle();

  const formik = useFormik({
    initialValues: {
      adminName: profileDataFromDB.Name,
      dateOfBirth: profileDataFromDB.DateOfBirth,
      email: profileDataFromDB.Email,
      phone: profileDataFromDB.Phone,
    },
    validationSchema: Yup.object({
      adminName: Yup.string().min(2, "Enter more than 1 character"),

      nickName: Yup.string().min(2, "Enter more than 1 character"),

      dateOfBirth: Yup.string(),

      email: Yup.string().email("Invalid Email Format !"),

      phone: Yup.string().matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Invalid Phone !"
      ),
    }),
    onSubmit: (values) => {
      updateOnDb(values);
    },
  });

  return (
    <div className={classes.EditMainDiv}>
      <span className={classes.DialogContentTitle}>Edit Profile Details</span>
      <div className={classes.formInputDisable}>
        <Icon icon="mdi:card-account-details" className={classes.infoIcon} />

        <input
          disabled
          type="text"
          name="adminName"
          className={classes.inputField}
          placeholder="Name"
          {...formik.getFieldProps("adminName")}
        ></input>
      </div>
      <span
        style={{
          fontSize: "0.8rem",
          color: "#ff3333",
          marginTop: "0.2rem",
          marginBottom: "0.2rem",
        }}
      >
        &nbsp; {formik.touched.adminName ? formik.errors.adminName : ""}{" "}
      </span>
      <div className={classes.formInput}>
        <BsFillCalendarDateFill className={classes.infoIcon} />
        <input
          type="text"
          name="dateOfBirth"
          className={classes.inputField}
          placeholder="Date of Birth"
          {...formik.getFieldProps("dateOfBirth")}
        ></input>
      </div>
      <span
        style={{
          fontSize: "0.8rem",
          color: "#ff3333",
          marginTop: "0.2rem",
          marginBottom: "0.2rem",
        }}
      >
        &nbsp; {formik.touched.dateOfBirth ? formik.errors.dateOfBirth : ""}{" "}
      </span>
      <div className={classes.formInputDisable}>
        <MdContactMail className={classes.infoIcon} />
        <input
          disabled
          type="text"
          // name="email"
          className={classes.inputField}
          placeholder="Your Email"
          {...formik.getFieldProps("email")}
        ></input>
      </div>
      <span
        style={{
          fontSize: "0.8rem",
          color: "#ff3333",
          marginTop: "0.2rem",
          marginBottom: "0.2rem",
        }}
      >
        &nbsp; {formik.touched.email ? formik.errors.email : ""}{" "}
      </span>
      <div className={classes.formInput}>
        <MdContactPhone className={classes.infoIcon} />
        <input
          value={profileDataFromDB.Phone}
          type="text"
          className={classes.inputField}
          placeholder="Your Phone"
          {...formik.getFieldProps("phone")}
        ></input>
      </div>
      <span
        style={{
          fontSize: "0.8rem",
          color: "#ff3333",
          marginTop: "0.2rem",
          marginBottom: "0.2rem",
        }}
      >
        &nbsp; {formik.touched.phone ? formik.errors.phone : ""}{" "}
      </span>
      <Button
        onClick={formik.handleSubmit}
        type="submit"
        style={{
          backgroundColor: "#1D9BF0",
          marginTop: "1rem",

          borderRadius: "10rem",
          paddingLeft: "3rem",
          paddingRight: "3rem",
          paddingTop: "0.1rem",
          paddingBottom: "0.1rem",
          fontSize: "0.8rem",
        }}
        variant="contained"
      >
        Save
        <IoIosArrowForward className={classes.arrowIcon} />
        <IoIosArrowForward
          className={classes.arrowIcon}
          style={{ marginLeft: "-1rem" }}
        />
      </Button>
    </div>
  );
};

export default EditProfile;
