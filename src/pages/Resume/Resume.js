import { Grid, Typography } from "@material-ui/core";
import React from "react";
import resumeData from "../../utils/resumeData";
import "./Resume.css";
import CustomTimeline, {
  CustomTimelineSeperator,
} from "../../components/Timeline/Timeline";

import { Work, School } from "@material-ui/icons";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineContent from "@material-ui/lab/TimelineContent";

const Resume = () => {
  return (
    <React.Fragment>
      {/* // about me */}
      <Grid container className="section pb_45">
        <Grid item className="section_title mb-30">
          <span></span>
          <h6 className="section_title_text">About Me</h6>
        </Grid>
        <Grid item xs={12}>
          <Typography className="aboutme_text">{resumeData.about}</Typography>
        </Grid>
      </Grid>

      {/* education and experience */}
      <Grid container className="section">
        <Grid item className="section_title mb-30">
          <span></span>
          <h6 className="section_title_text">Working And Education History</h6>
        </Grid>

        <Grid item xs={12}>
          <Grid container>
            {/* experience */}
            <Grid item xs={12} md={6}>
              <CustomTimeline title="Work Experience" icon={<Work />}>
                {resumeData.experience.map((exp) => (
                  <TimelineItem>
                    <CustomTimelineSeperator />
                    <TimelineContent className="timeline_content">
                      <h3 className="timeline_tile">{exp.title}</h3>
                      <span className="timeline_date">{exp.Date}</span>
                      <p className="timeline_dec aboutme_text">
                        {exp.description}
                      </p>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>
            {/* education */}
            <Grid item xs={12} md={6}>
              <CustomTimeline title="Education History" icon={<School />}>
                {resumeData.education.map((education) => (
                  <TimelineItem>
                    <CustomTimelineSeperator />
                    <TimelineContent className="timeline_content">
                      <h3 className="timeline_tile">{education.title}</h3>
                      <span className="timeline_date">{education.Date}</span>
                      <p className="timeline_dec">{education.description}</p>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container className="section">
        {/* <Grid item className="section_title">
          <span></span>
          <Typography variant="h6">About Me</Typography>
        </Grid> */}
      </Grid>
      <Grid container className="section">
        {/* <Grid item className="section_title">
          <span></span>
          <Typography variant="h6">About Me</Typography>
        </Grid> */}
      </Grid>
    </React.Fragment>
  );
};

export default Resume;
