import { Button } from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";
import React from "react";

export function LoginButton() {
  let location = useLocation();
  const LinkBehavior = React.forwardRef((props, ref) => (
    <RouterLink
      state={{ backgroundLocation: location }}
      ref={ref}
      to="/login"
      {...props}
      role={undefined}
    />
  ));
  return (
    <Button sx={{ color: "white" }} component={LinkBehavior}>
      Login
    </Button>
  );
}
