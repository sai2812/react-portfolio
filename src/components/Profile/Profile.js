import React from "react";
import Typography from "@material-ui/core/Typography";
import "./Profile.css";
import logo from "../../asset/images/display.jpg";
import CustomTimeLine from "../Timeline/Timeline";
import data from "../../utils/resumeData";
import PersonOutlineOutlined from "@material-ui/icons/PersonOutlineOutlined";
import TimelineItem from "@material-ui/lab/TimelineItem";
import { CustomTimelineSeperator } from "../Timeline/Timeline";
import TimelineContent from "@material-ui/lab/TimelineContent";
import CustomButton from "../Button/Button";
import GetApp from "@material-ui/icons/GetApp";

const CustomTimelineItem = ({ title, text, link }) => (
  <TimelineItem>
    <CustomTimelineSeperator />
    <TimelineContent className="timeline_content">
      {link ? (
        <Typography className="timelineItem_text">
          <span>{title}</span>:{" "}
          <a href={link} target="_blank" rel="noreferrer">
            {text}
          </a>
        </Typography>
      ) : (
        <Typography className="timelineItem_text">
          <span>{title}</span>:{text}
        </Typography>
      )}
    </TimelineContent>
  </TimelineItem>
);

const Profile = () => {
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">{data.name}</Typography>
        <Typography className="title">{data.title}</Typography>
      </div>

      <figure className="profile_image">
        <img src={logo} alt="profile Pic" />
      </figure>

      <div className="profile_information">
        <CustomTimeLine icon={<PersonOutlineOutlined />}>
          <CustomTimelineItem title="Name" text={data.name} />
          <CustomTimelineItem title="Title" text={data.title} />
          {/* <CustomTimelineItem title="Email" text={data.email} /> */}
          {Object.keys(data.social).map((key) => {
            return (
              <CustomTimelineItem
                title={key}
                text={data.social[key].text}
                link={data.social[key].link}
              />
            );
          })}
        </CustomTimeLine>
        <br />
        <div className="button_container">
          <CustomButton
            text={"Want My Resume"}
            icon={<GetApp />}
            mail={
              "mailto:sai281294@gmail.com?subject=Can you please send me a copy of your resume for my reference!&amp;body=Hi, Can you please send me a copy of your resume for my reference? Thanks!"
            }
          ></CustomButton>
        </div>
      </div>
    </div>
  );
};

export default Profile;
