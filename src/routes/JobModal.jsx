import React from "react";
import { useParams } from "react-router-dom";
import { getJobById } from "../assets/Jobs";
import { Link } from "react-router-dom";
import "./modal.css";
import Typography from "@mui/material/Typography";
import ThemeProvider from "../contexts/ThemeProvider";

function JobModal() {
  const id = useParams().jobId;
  const job = getJobById(id);

  return (
    <ThemeProvider>
      <div id="modalDiv">
        <h1>{`${job.title}`}</h1>

        <Link to={"/"}>Back</Link>
      </div>
    </ThemeProvider>
  );
}

export default JobModal;
