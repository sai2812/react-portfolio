import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
// Button,
// Form,
// FormControl,
// NavDropdown,
import { Navbar, Nav } from "react-bootstrap";

// SchoolRounded,
// WorkRounded,
// Facebook,
// Twitter,
// LinkedIn,
// GitHub,
import { HomeRounded, Mail } from "@material-ui/icons";
import CustomButton from "../Button/Button";

import { NavLink, withRouter } from "react-router-dom";
import resumeData from "../../utils/resumeData";
import "./Header.css";

const Header = (props) => {
  const pathName = props?.location?.pathname;
  console.log(pathName);
  return (
    <Navbar bg="white" expand="lg" sticky="top" className="header">
      <Nav.Link as={NavLink} to="/" className="p-0 m-0">
        <Navbar.Brand className="header_home">
          <HomeRounded />
        </Navbar.Brand>
      </Nav.Link>

      <Navbar.Toggle />

      <Navbar.Collapse>
        <Nav className="header_left pl-3">
          <Nav.Link
            as={NavLink}
            to="/"
            className={pathName === "/" ? "header_link_active" : "header_link"}
          >
            Resume
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/portfolio"
            className={
              pathName === "/portfolio" ? "header_link_active" : "header_link"
            }
          >
            Skillset
          </Nav.Link>
        </Nav>
        <div className="header_right pl-3 pb-1">
          {Object.keys(resumeData.social).map((key) => {
            return (
              <a
                href={resumeData.social[key].link}
                target="_blank"
                without
                rel="noreferrer"
              >
                {resumeData.social[key].icon}
              </a>
            );
          })}
        </div>
        <span className="pl-3">
          <CustomButton
            text={"Hire Me"}
            icon={<Mail />}
            mail={
              "mailto:sai281294@gmail.com?subject=Can you please send me a copy of your resume for my reference!&amp;body=Hi, Can you please send me a copy of your resume for my reference? Thanks!"
            }
          ></CustomButton>
        </span>
      </Navbar.Collapse>
    </Navbar>
  );
};

//withRouter for accessing match, location, history
export default withRouter(Header);
