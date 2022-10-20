import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, Chip, Divider, Link } from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";

export default function JobCard({ job }) {
  let location = useLocation();
  const skills = job.skills;
  const LinkBehavior = React.forwardRef((props, ref) => (
    <RouterLink
      state={{ backgroundLocation: location }}
      ref={ref}
      to={`/${job.id}`}
      {...props}
    />
  ));
  return (
    <>
      <Link color="inherit" underline="none" component={LinkBehavior}>
        <Box sx={{ width: 275 }}>
          <Card variant="outlined" sx={{ borderRadius: 5 }}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom>{job.title}</Typography>
                <Divider />
                {skills.slice(0, 4).map((skill) => (
                  <Chip
                    color="success"
                    size="small"
                    label={skill}
                    sx={{ margin: 1 }}
                    key={`${job.id}${skill}`}
                  />
                ))}
                <Typography mt={1}> {job.description} </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      </Link>
    </>
  );
}
