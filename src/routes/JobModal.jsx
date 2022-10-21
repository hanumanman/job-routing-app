import React from "react";
import { useParams } from "react-router-dom";
import { getJobById } from "../assets/Jobs";
import { Link } from "react-router-dom";
import "./modal.css";
import Typography from "@mui/material/Typography";
import ThemeProvider from "../contexts/ThemeProvider";
import { Chip } from "@mui/material";

function JobModal() {
  const id = useParams().jobId;
  const job = getJobById(id);

  return (
    <ThemeProvider>
      <div id="modalDiv">
        <h1>{`${job.title}`}</h1>
        <div>
          {job.skills.map((skill) => (
            <Chip
              color="success"
              size="small"
              label={skill}
              sx={{ margin: 1 }}
              key={`${job.id}${skill}`}
            />
          ))}
        </div>
        <p>{job.description}</p>
        <p>Experience required: {job.yrsXPExpected} years</p>
        <Typography variant="h7">
          Range: {job.salaryLow} - {job.salaryHigh}
        </Typography>
        <Typography variant="h7">Location: {job.city}</Typography>
        <Link to={"/"}>Back</Link>
      </div>
    </ThemeProvider>
  );
}

export default JobModal;
