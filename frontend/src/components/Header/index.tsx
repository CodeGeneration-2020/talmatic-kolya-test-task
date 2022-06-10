import React from "react";
import { makeStyles } from "@mui/styles";
import { Grid, Theme, Typography } from "@mui/material";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    minHeight: "100px",
    width: "100%",
    backgroundColor: theme.palette.primary.main,
    display: "flex",
    justifyContent: "center",
  },
  grid: {
    maxWidth: `${theme.breakpoints.values.xl}px`,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },
  title: {
    fontSize: "2rem",
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} md={8} className={classes.grid}>
        <Typography className={classes.title}>Demdx-challange</Typography>
      </Grid>
    </Grid>
  );
};

export default Header;
