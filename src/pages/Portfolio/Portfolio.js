import React from "react";
import { Bar } from "react-chartjs-2";
import { Grid } from "@material-ui/core";

const frameworksData = {
  labels: ["Angular", "Node.js", "React.js", "Express", "AWS"],
  datasets: [
    {
      label: "Frameworks / Libraries / Cloud",
      data: [9, 8, 6.5, 9, 5],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        // "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        // "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const webTechnologiesData = {
  labels: ["HTML", "CSS", "Bootstrap", "Javascript"],
  datasets: [
    {
      label: "Web Technologies",
      data: [9, 7, 8, 8],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        // "rgba(153, 102, 255, 0.2)",
        // "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        // "rgba(153, 102, 255, 1)",
        // "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};
const interestData = {
  labels: ["Beatboxing", "Coding", "Reading"],
  datasets: [
    {
      label: "Interests",
      data: [9.5, 9.2, 7],
      backgroundColor: [
        // "rgba(255, 99, 132, 0.2)",
        // "rgba(54, 162, 235, 0.2)",
        // "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        // "rgba(255, 99, 132, 1)",
        // "rgba(54, 162, 235, 1)",
        // "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  scales: {
    y: {
      type: "linear",
      min: 0,
      max: 10,
    },
  },
};
const Portfolio = () => (
  <>
    <Grid container spacing={10}>
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <Bar data={frameworksData} options={options} />
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <Bar data={webTechnologiesData} options={options} />
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <Bar data={interestData} options={options} />
      </Grid>
    </Grid>
  </>
);

export default Portfolio;

// yAxes: [
//   {
//     ticks: {
//       beginAtZero: true,
//     },
//   },
// ],
