import { React } from "react";
import SearchAppBar from "../components/AppBar";
import ThemeProvider from "../contexts/ThemeProvider";
import CssBaseline from "@mui/material/CssBaseline";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { jobs } from "../assets/Jobs";
import Paginations from "../components/Paginations";
import JobCard from "../components/JobCard";
import "./modal.css";
import { Outlet } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Root() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <SearchAppBar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={3}
            sx={{ justifyContent: "center", marginTop: "2rem" }}
          >
            {jobs.slice(6, 11).map((job) => (
              <Grid item key={job.id}>
                <Item sx={{ borderRadius: 5 }}>
                  <JobCard job={job} />
                </Item>
              </Grid>
            ))}
            <Outlet />
          </Grid>
        </Box>
        <Paginations />
      </Box>
    </ThemeProvider>
  );
}

export default Root;
