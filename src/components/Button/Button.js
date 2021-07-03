import React from "react";
import { Button } from "@material-ui/core";
import "./Button.css";

const CustomButton = ({ text, icon, mail }) => {
  //   const sendMail = () => {
  //     window.location.href = mail;
  //   };

  return (
    <Button
      className="custom_btn"
      endIcon={
        icon ? <div className="custom_icon_container">{icon}</div> : null
      }
      href={mail}
    >
      <span className="custom_text">{text}</span>
    </Button>
  );
};

export default CustomButton;
